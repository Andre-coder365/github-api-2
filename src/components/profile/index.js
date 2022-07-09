import React from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';

const Profile = () => 

{
  const {githubState} = useGithub ();

  return (
    <S.Wrapper>
        <S.WrapperImage src="https://avatars.githubusercontent.com/u/106115194?v=4" alt="Avatar of user"/>
        <S.WrapperInfoUser>
            <div>
          <h1>githubState</h1>
          <S.WrapperUserName>
          <h3>Username:</h3>
          <a href = "https://github.com/Andre-coder365" target = "_blank" rel='noreferrer'>Andre-coder365</a>
          </S.WrapperUserName>
            </div>
          <S.WrapperStatusCount>
            <div>
            <h4>Followers</h4>
            <span>5</span>
            </div>
            <div>
            <h4>Starreds</h4>
            <span>5</span>
            </div>
            <div>
            <h4>Followings</h4>
            <span>5</span>
            </div>            
          </S.WrapperStatusCount>
        </S.WrapperInfoUser>
        
    </S.Wrapper>
  )
};

export default Profile;