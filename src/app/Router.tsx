import { Routes, Route } from 'react-router-dom';
import { CharacterExtendedDetailDialog } from './components/dialogs/CharacterExtendedDetailDialog';
import CharacterDetail from './pages/CharacterDetail';
import Home from './pages/Home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/character/:characterId/:extendedType"
        element={<CharacterDetail />}
      ></Route>
      <Route path=":characterId/character-detail" element={<CharacterDetail />}>
        <Route path=":extend" element={<CharacterExtendedDetailDialog />}></Route>
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: '5rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}
