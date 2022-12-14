import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { shield, ribbon, football } from 'ionicons/icons';
import Matches from './pages/Matches';
import Teams from './pages/Teams';
import Ranking from './pages/Ranking';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/matches">
            <Matches />
          </Route>
          <Route exact path="/teams">
            <Teams />
          </Route>
          <Route path="/ranking">
            <Ranking />
          </Route>
          <Route exact path="/">
            <Redirect to="/matches" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="matches" href="/matches">
            <IonIcon icon={football} />
            <IonLabel>Matches</IonLabel>
          </IonTabButton>
          <IonTabButton tab="teams" href="/teams">
            <IonIcon icon={shield} />
            <IonLabel>Teams</IonLabel>
          </IonTabButton>
          <IonTabButton tab="ranking" href="/ranking">
            <IonIcon icon={ribbon} />
            <IonLabel>Ranking</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
