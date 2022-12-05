import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { useState } from 'react';
import { TeamItem } from '../components/TeamItem';
import { TEAMS } from '../data/teams';
import { Team } from '../models/team.model';

const Teams: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  useIonViewDidEnter(async () => {
    // const result = await fetch('https://uifaces.co/api?limit=25', {
    //   headers: {
    //     'x-API-KEY': '873771d7760b846d51d025ac5804ab'
    //   }
    // })
    // const data = await result.json();
    const data = TEAMS;
    setTeams(data)
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Teams</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {teams.map((team, i) => <TeamItem key={i} team={team} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Teams;
