import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {themes} from './../styles';
import {OtherIcons} from './../../assets/icons';

const SearchBarContainer = styled.View`
  height: 44px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background-color: ${({theme}) => themes.light.boxColor.inputSecondary};
  flex: 1;
  padding: 13px 20px 13px 15px;
`;

const SearchInput = styled.TextInput`
  font-size: 15px;
  font-family: 'Pretendard-SemiBold';
  flex: 1;
`;

const SearchButton = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

const SearchBar = ({searchQuery, setSearchQuery, onSearch}) => {
  return (
    <SearchBarContainer>
      <SearchInput
        placeholder="약 이름, 증상을 입력하세요"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <SearchButton onPress={onSearch}>
        <OtherIcons.search width={17.5} height={17.5} style={{color: themes.light.textColor.Primary20}}/>
      </SearchButton>
    </SearchBarContainer>
  );
};

export { SearchBar };