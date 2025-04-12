import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Button } from '@ui-kitten/components';
import { default as theme } from '../components/theme/custom-theme.json'; // <-- Import app theme

export default function Index() {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button>HOME</Button>
      </Layout>
    </ApplicationProvider>
  );
}
