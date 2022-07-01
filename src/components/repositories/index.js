import React from 'react';
import RepositoryItem from '../repository-item';
import * as S from "./styled";

function Repositories() {
  return (
    <S.WrapperTabs
    selectedTabClassName="is-selected"
    selectedTabPanelClassName="is-selected"
    >

        <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
        </S.WrapperTabList>
        <S.WrapperTabPanel>
          <RepositoryItem 
          name = "jogo-da-memoria" 
          linkToRepo="https://github.com/Andre-coder365/jogo-da-memoria"
          fullName = "Andre-coder365/jogo-da-memoria"/>
        </S.WrapperTabPanel>
        <S.WrapperTabPanel>
          <RepositoryItem name = "livro-receitas" 
          linkToRepo="https://github.com/Andre-coder365/livro-receitas"
          fullName = "Andre-coder365/livro-receitas"/>
        </S.WrapperTabPanel>
        
    </S.WrapperTabs>
  );
};

export default Repositories;