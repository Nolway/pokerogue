import { SimpleTranslationEntries } from "#app/plugins/i18n";

/**
 * The menu namespace holds most miscellaneous text that isn't directly part of the game's
 * contents or directly related to Pokemon data. This includes menu navigation, settings,
 * account interactions, descriptive text, etc.
 */
export const menu: SimpleTranslationEntries = {
  cancel: "Cancelar",
  continue: "Continuar",
  dailyRun: "Desafio Diário (Beta)",
  loadGame: "Carregar Jogo",
  newGame: "Novo Jogo",
  settings: "Configurações",
  selectGameMode: "Escolha um modo de jogo.",
  logInOrCreateAccount: "Inicie uma sessão ou crie uma conta para começar. Não é necessário email!",
  username: "Nome de Usuário",
  password: "Senha",
  login: "Iniciar sessão",
  register: "Registrar-se",
  emptyUsername: "Nome de usuário vazio",
  invalidLoginUsername: "Nome de usuário inválido",
  invalidRegisterUsername: "O nome de usuário só pode conter letras, números e sublinhados",
  invalidLoginPassword: "Senha inválida",
  invalidRegisterPassword: "A senha deve ter pelo menos 6 caracteres",
  usernameAlreadyUsed: "Esse nome de usuário já está em uso",
  accountNonExistent: "Esse nome de usuário não existe",
  unmatchingPassword: "Senha incorreta",
  passwordNotMatchingConfirmPassword: "As senhas não coincidem",
  confirmPassword: "Confirmar senha",
  registrationAgeWarning: "Se registrando, você confirma que tem pelo menos 13 anos de idade.",
  backToLogin: "Voltar ao Login",
  failedToLoadSaveData:
    "Não foi possível carregar os dados de salvamento. Por favor, recarregue a página.\nSe a falha persistir, contate o administrador.",
  sessionSuccess: "Sessão carregada com sucesso.",
  failedToLoadSession:
    "Não foi possível carregar os dados da sua sessão.\nEles podem estar corrompidos.",
  boyOrGirl: "Você é um menino ou uma menina?",
  boy: "Menino",
  girl: "Menina",
  evolving: "Que?\n{{pokemonName}} tá evoluindo!",
  stoppedEvolving: "{{pokemonName}} parou de evoluir.",
  pauseEvolutionsQuestion:
    "Gostaria de pausar evoluções para {{pokemonName}}?\nEvoluções podem ser religadas na tela de equipe.",
  evolutionsPaused: "Evoluções foram paradas para {{pokemonName}}.",
  evolutionDone: "Parabéns!\nSeu {{pokemonName}} evolui para {{evolvedPokemonName}}!",
  dailyRankings: "Classificação Diária",
  weeklyRankings: "Classificação Semanal",
  noRankings: "Sem Classificação",
  positionIcon: "#",
  usernameScoreboard: "Usuário",
  score: "Pontuação",
  wave: "Onda",
  loading: "Carregando…",
  loadingAsset: "Carregando recurso: {{assetName}}",
  playersOnline: "Jogadores Ativos",
  yes: "Sim",
  no: "Não",
  disclaimer: "AVISO",
  disclaimerDescription:
    "Este jogo é um produto inacabado; ele pode ter problemas de jogabilidade (incluindo possíveis perdas de dados salvos),\n sofrer alterações sem aviso prévio e pode ou não ser atualizado ou concluído."
} as const;
