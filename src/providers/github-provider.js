import React, {Children, createContext, useState} from 'react'

export const GithubContext = createContext ({
    user: {},
    repositories: [], 
    starred: [],
});

const GithubProvider = ({Children}) => 
{
    const [githubState, setGithubState] = useState({
        user: {
            login: undefined,
            name: 'André',
            publicUrl: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,


            followers: 0,
            followings: 0,
            public_gists: 0,
            public_repos: 0,
        },

        repositories: [],
        starred: [],
    } );

        const contextValue = {githubState,};

  return (
    <GithubContext.Provider value = {contextValue}>{Children}</GithubContext.Provider>

  );
};

export default GithubProvider;