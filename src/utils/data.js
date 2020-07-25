import { useState, useEffect }from "react"
import firebase from "gatsby-plugin-firebase"
import axios from 'axios'


const SelectedProjects = () => {
    
    const [projects, setProjects] =  useState()

    useEffect(() => {
        firebase
        .firestore()
        .collection("/projects")
        .orderBy("date_added")
        .onSnapshot(snapshot => {
            const lists = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),   
            }))
            setProjects(lists)
        })
    }, [])

    return [projects]
}

const BlogList = () => {
    
    const [blogs, setBLogs] =  useState()

    useEffect(() => {
        firebase
        .firestore()
        .collection("/blogs")
        .orderBy("date_added")
        .onSnapshot(snapshot => {
            const lists = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),   
            }))
            setBLogs(lists)
        })
    }, [])

    return [blogs]
}

const Repos = () => {
    
    const url = "https://api.github.com/users/allancolibao/repos"
    const [repo, setRepo] =  useState([])

    useEffect(() => {
        axios
        .get(url)
        .then(response => setRepo(response.data))
    }, [])

    return [repo]
}

export {
    SelectedProjects,
    BlogList,
    Repos
}