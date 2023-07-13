import { computed, effect, signal } from '@angular/core';
import { interval } from 'rxjs';

/* I-🛰 Signal API */
/* #1-🕹 Create Signal (Création) */
const age = signal(10); // inference

interface User {
  name: string;
  role: 'admin' | 'guest';
}
const users = signal<User[]>([{ name: 'toto', role: 'guest' }]);

/* #2-📺 Read Signal value */
age(); // 10
users(); // [{ name: 'toto', role: 'guest' }]

/* #3-⏲ Update Signal value (Lecture) */
// #3-1-Replace the current value by a new one :
// signal.set(newValue)
age.set(15);
age(); // 15

// #3-2-Update/Compute value based on current one :
// signal.update((currentValue) => newValue)
const newUser: User = { name: 'su', role: 'admin' };
users.update((currentUsers) => [...currentUsers, newUser]);
users(); // [{ name: 'toto', role: 'guest' }, { name: 'su', role: 'admin' }]

// #3-3-Mutate the current value (non primitive) :
// signal.mutate((currentValue) => void)
users.mutate((currentUsers) => {
  currentUsers[0].name = 'root';
  currentUsers[0].role = 'admin';
});
users(); // [{ name: 'root', role: 'admin' }, { name: 'su', role: 'admin' }]

/* II-🔬 Fonctionnement */
/* 
- Fonctionnement Général:
Modification de la valeur actuelle => informer les consommateurs
que la valeur du signal a changé => le consommateur voit la nouvelle 
valeur à la prochaine lecture du signal.

- Avec Angular
En utilisant un signal dans le template d'un composant,
Angular considère le signal comme une dépendance. 
A chaque fois que Angular est notifié d'un changement de la valeur 
de cette dépendance , Angular fait un nouveau render 
pour mettre à jour la vue afficher à l'utilisateur.
*/

/* III- 📡 Signal vs 🔭 Observable */
/*
un signal n'émet pas de valeur => le consommateur est notifier 
du changement de valeur mais doit lire explicitement 
le signal pour avoir la nouvelle valeur.

Il faut souscrire à un Observable via un callback
pour pouvoir lire ses valeurs. Le callback sera automatiquement
appelé à chaque nouvelle émission de valeur

Plus de détails: https://www.builder.io/blog/signals-vs-observables
*/

// Observable
const obs = interval(1000);
obs.subscribe((newValue) => {
  // will be executed everytime a new value is emitted by "obs"
  console.log('New value received :', newValue);
});

// Signal
const count = signal(0);
count(); // 0
count.set(7);
count(); // we must explicity read to get the new value i.e 7

/* IV-💻 Computed Signal (Signal Calculé) */
/* 
Computed Signal = S. dont la valeur dépend d'un/plusieurs autres signaux.

SignalA = SignalB + SignalC 
  => SignalA = Computed Signal (Signal Calculé)
  => SignalB, SignalC = Dependant Signals (Signaux dépendants)

[Notes]: 
- un "Computed signal" est en lecture seule.
  => Sa valeur n'est pas modifiaible via "set", "update" ou "mutate".
- La valeur est recalculée à chaque fois que la valeur d'un 
  signal dépendant change.
- La valeur calculée est mémoisée.
  => Même si elle est lue plusieurs fois (dans le template par exemple),
  la valeur n'est pas recalculée tant que la valeur 
  d'aucun de ses signaux dépendants n'a changé.
*/
const unitPrice = signal(10);
const quantity = signal(5);

//  totalPrice: Signal<number>
const totalPrice = computed(() => unitPrice() * quantity());
totalPrice(); // 50

// update the price later => total price recalculated
unitPrice.set(7);
totalPrice(); // 35

/* V-🚧 Effect */
/* 
A utiliser lorsque nous avons des codes qui produisent des side-effects.
 
  Ex: Appels API, logging (debuggage en utilisant console.log).

Permet d'exécuter un callback à chaque fois 
que la valeur de l'un de ces signaux dépendants change de valeur.

[Note]:
 La fonction passer à effect() ne doit pas apporter 
 de modification aux signaux dépendant. 
 (Sinon cela entrainerait une boucle infinie.)
*/
const isValid = signal(false);

effect(() => {
  console.log('Is valid : ', isValid());
});

isValid.set(true); // will log 'Is valid : true'
isValid.set(false); // will log 'Is valid : false'

/* V-🥋 Let's Practice (Practice makes perfect !!)  */
/* TAF :
1X- Afficher la liste des produits en utilisant le composant "product-item"
2X- Afficher le nombre total de produits
3- Implementer les boutons d'actions
X- Delete All
X- Reset List
X- Add new mutable
X- Add new immutable
X4- Implementation du filtre
X5- Logger les MAJ de la liste des produits


*/
