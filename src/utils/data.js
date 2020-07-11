import { useState, useEffect }from "react"
import firebase from "gatsby-plugin-firebase"


const Stacks = () => {

    const [stacks, setStacks] = useState()

    useEffect(() => {
        firebase
        .firestore()
        .collection("/skills/stacks/lists")
        .orderBy("name")
        .onSnapshot(snapshot => {
            const lists = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),   
            }))
            setStacks(lists)
        })
    }, [])

    return [stacks]
}

const Tools = () => {
    
    const [tools, setTools] =  useState()

    useEffect(() => {
        firebase
        .firestore()
        .collection("/skills/tools/lists")
        .orderBy("name")
        .onSnapshot(snapshot => {
            const lists = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),   
            }))
            setTools(lists)
        })
    }, [])

    return [tools]
}

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

export {
    Stacks,
    Tools,
    SelectedProjects,
    BlogList
}