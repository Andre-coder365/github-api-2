import React, {Children, createContext, useState} from 'react'

export const GithubContext = createContext ({
    user: {},
    repositories: [], 
    starred: [],
});

function GithubProvider({Children}) 
{
    useState [githubState, setGithubState] = useState({
        user: {
            login: undefined,
            name: undefined,
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
    <GithubProvider.Provider value = {contextValue}>{Children}</GithubProvider.Provider>

  );
};

export default GithubProvider;