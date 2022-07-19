import MainLayout from '@/layout/MainLayout';
import PlayerCounter from '@/components/PlayerCounter';
import GlobalStyle from '@/assets/style/global';
import { useRecoilValue } from 'recoil';
import { gameStartQuery } from '@/store';
import GameEngine from '@/components/GameEngine';

function App() {
    const isGameStart = useRecoilValue(gameStartQuery);

    return (
        <MainLayout>
            {isGameStart ? <GameEngine /> : <PlayerCounter />}
            <GlobalStyle />
        </MainLayout>
    );
}

export default App;
