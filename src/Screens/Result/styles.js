import styled from 'styled-components/native';

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fonts.xlarge};
  margin: ${(props) => props.theme.hpx(20)};
  text-align: center;
`;

export const ContentContainer = styled.View`
  border-radius: ${(props) => props.theme.hpx(10)};
  align-self: center;
`;

export const ButtonsContainer = styled.View`
  bottom: ${(props) => props.theme.hpx(20)};
  width: 100%;
  padding-horizontal: ${(props) => props.theme.hpx(20)};
`;

export const ScoreContainer = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  margin-top: ${(props) => props.theme.hpx(20)};
`;
export const WinsLoosesContainer = styled.View`
  align-items: center;
  margin-horizontal: ${(props) => props.theme.wpx(10)};
`;
export const PlayerAvatar = styled.Image`
  width: ${(props) => props.theme.hpx(100)};
  height: ${(props) => props.theme.hpx(100)};
  border-radius: ${(props) => props.theme.hpx(50)};
`;
export const PlayerName = styled.Text.attrs((props) => ({
  ellipsizeMode: 'tail',
  numberOfLines: 1,
}))`
  width: ${(props) => props.theme.wpx(120)};
  text-align: center;
  font-size: ${(props) => props.theme.fonts.small};
  color: ${(props) => props.theme.colors.gray};
  font-family: ${(props) => props.theme.fontName.regular};
  margin-vertical: ${(props) => props.theme.hpx(10)};
`;
export const ScoreLooseValue = styled.Text`
  font-size: ${(props) => props.theme.fonts.large};
  color: ${(props) => props.theme.colors.red};
  font-family: ${(props) => props.theme.fontName.bold};
`;
export const ScoreWinValue = styled.Text`
  font-size: ${(props) => props.theme.fonts.large};
  color: ${(props) => props.theme.colors.green};
  font-family: ${(props) => props.theme.fontName.bold};
`;
