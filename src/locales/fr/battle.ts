import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const battle: SimpleTranslationEntries = {
  bossAppeared: "Un {{bossName}} apparait.",
  trainerAppeared: "Un combat est lancé\npar {{trainerName}} !",
  trainerAppearedDouble: "Un combat est lancé\npar {{trainerName}} !",
  trainerSendOut: "{{pokemonName}} est envoyé par\n{{trainerName}} !",
  singleWildAppeared: "Un {{pokemonName}} sauvage apparait !",
  multiWildAppeared: "Un {{pokemonName1}} et un {{pokemonName2}}\nsauvages apparaissent !",
  playerComeBack: "{{pokemonName}} !\nReviens !",
  trainerComeBack: "{{trainerName}} retire {{pokemonName}} !",
  playerGo: "{{pokemonName}} ! Go !",
  trainerGo: "{{pokemonName}} est envoyé par\n{{trainerName}} !",
  switchQuestion: "Voulez-vous changer\nvotre {{pokemonName}} ?",
  trainerDefeated: "Vous avez battu\n{{trainerName}} !",
  moneyWon: "Vous remportez\n{{moneyAmount}} ₽ !",
  pokemonCaught: "Vous avez attrapé {{pokemonName}} !",
  partyFull: "Votre équipe est pleine.\nRelâcher un Pokémon pour {{pokemonName}} ?",
  pokemon: "Pokémon",
  sendOutPokemon: "{{pokemonName}} ! Go !",
  hitResultCriticalHit: "Coup critique !",
  hitResultSuperEffective: "C’est super efficace !",
  hitResultNotVeryEffective: "Ce n’est pas très efficace…",
  hitResultNoEffect: "Ça n’affecte pas {{pokemonName}}…",
  hitResultOneHitKO: "K.O. en un coup !",
  attackFailed: "Mais cela échoue !",
  attackHitsCount: "Touché {{count}} fois !",
  expGain: "{{pokemonName}} gagne\n{{exp}} Points d’Exp !",
  levelUp: "{{pokemonName}} monte au\nN. {{level}} !",
  learnMove: "{{pokemonName}} apprend\n{{moveName}} !",
  learnMovePrompt: "{{pokemonName}} veut apprendre\n{{moveName}}.",
  learnMoveLimitReached: "Cependant, {{pokemonName}} connait\ndéjà quatre capacités.",
  learnMoveReplaceQuestion: "Voulez-vous oublier une capacité\net la remplacer par {{moveName}} ?",
  learnMoveStopTeaching: "Arrêter d’apprendre\n{{moveName}} ?",
  learnMoveNotLearned: "{{pokemonName}} n’a pas appris\n{{moveName}}.",
  learnMoveForgetQuestion: "Quelle capacité doit être oubliée ?",
  learnMoveForgetSuccess: "{{pokemonName}} oublie comment\nutiliser {{moveName}}.",
  countdownPoof: "@d{32}1, @d{15}2, @d{15}et@d{15}… @d{15}… @d{15}… @d{15}@s{pb_bounce_1}Tadaaa !",
  learnMoveAnd: "Et…",
  levelCapUp: "La limite de niveau\na été augmentée à {{levelCap}} !",
  moveNotImplemented: "{{moveName}} n’est pas encore implémenté et ne peut pas être sélectionné.",
  moveNoPP: "Il n’y a plus de PP pour\ncette capacité !",
  moveDisabled: "{{moveName}} est sous entrave !",
  noPokeballForce: "Une force mystérieuse\nempêche l’utilisation des Poké Balls.",
  noPokeballTrainer: "Le Dresseur détourne la Ball\nVoler, c’est mal !",
  noPokeballMulti: "Impossible ! On ne peut pas viser\nquand il y a deux Pokémon !",
  noPokeballStrong:
    "Le Pokémon est trop fort pour être capturé !\nVous devez d’abord l’affaiblir !",
  noEscapeForce: "Une force mystérieuse\nempêche la fuite.",
  noEscapeTrainer: "On ne s’enfuit pas d’un\ncombat de Dresseurs !",
  noEscapePokemon: "{{moveName}} de {{pokemonName}}\nempêche {{escapeVerb}} !",
  runAwaySuccess: "Vous prenez la fuite !",
  runAwayCannotEscape: "Fuite impossible !",
  escapeVerbSwitch: "le changement",
  escapeVerbFlee: "la fuite",
  notDisabled: "La capacité {{moveName}}\nde {{pokemonName}} n’est plus sous entrave !",
  skipItemQuestion: "Êtes-vous sûr·e de ne pas vouloir prendre d’objet ?",
  eggHatching: "Hein ?",
  ivScannerUseQuestion: "Utiliser le Scanner d’IV sur {{pokemonName}} ?",
  wildPokemonWithAffix: "{{pokemonName}} sauvage",
  foePokemonWithAffix: "{{pokemonName}} ennemi",
  useMove: "{{pokemonNameWithAffix}} utilise\n{{moveName}} !",
  drainMessage: "L’énergie de {{pokemonName}}\nest drainée !",
  regainHealth: "{{pokemonName}} récupère\ndes PV !",
  fainted: "{{pokemonNameWithAffix}}\nest K.O. !",
  statRose: "rose",
  statSharplyRose: "sharply rose",
  statRoseDrastically: "rose drastically",
  statWontGoAnyHigher: "won't go any higher",
  statFell: "fell",
  statHarshlyFell: "harshly fell",
  statSeverelyFell: "severely fell",
  statWontGoAnyLower: "won't go any lower"
} as const;
