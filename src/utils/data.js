import { useState, useEffect } from "react"
import firebase from "gatsby-plugin-firebase"
import axios from 'axios'



const SelectedProjects = () => {
    
    const [projects, setProjects] =  useState()

    useEffect(() => {
        const unSubscribe = firebase
        .firestore()
        .collection("/projects")
        .orderBy("date_added", "desc")
        .onSnapshot(snapshot => {
            const lists = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),   
            }))
            setProjects(lists)
        })

        return () => {
            unSubscribe()
        }
    }, [])

    return [projects]
}

const BlogList = () => {
    
    const [blogs, setBLogs] =  useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        
        const unSubscribe = firebase
        .firestore()
        .collection("/blogs")
        .orderBy("date_added", "desc")
        .onSnapshot(snapshot => {
            const lists = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),   
            }))
            setBLogs(lists)
            setTimeout(() => setIsLoading(false), 1000)
        })

        return () => {
            unSubscribe()
          }
    }, [])

    return [blogs, isLoading]
}

const Repos = () => {
    
    const url = "https://api.github.com/users/allancolibao/repos"
    const [repo, setRepo] =  useState([])

    useEffect(() => {
        const CancelToken = axios.CancelToken
        const source = CancelToken.source()

        axios
        .get(url, { cancelToken: source.token })
        .then(response => setRepo(response.data))

        return () => {
            source.cancel()
          }
    }, [])

    return [repo]
}

export {
    SelectedProjects,
    BlogList,
    Repos
}