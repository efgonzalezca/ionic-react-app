import { IonAvatar, IonItem, IonLabel } from '@ionic/react';
import { Team } from '../models/team.model';

export const TeamItem: React.FC<{team: Team}> = ({team}) => {
  return(
    <IonItem>
      <IonAvatar>
        <img src={team.image} />
      </IonAvatar>
      <IonLabel>
        <h2>{team.name}</h2>
        <p>{team.fifa_rank}</p>
      </IonLabel>
    </IonItem>
  )
}