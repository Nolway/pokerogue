import * as Utils from "../utils";
import { allMoves } from "./move";
import { Moves } from "#enums/moves";
import { Species } from "#enums/species";

export const speciesEggMoves = {
  [Species.BULBASAUR]: [Moves.GIGA_DRAIN, Moves.SLUDGE_BOMB, Moves.EARTH_POWER, Moves.SAPPY_SEED],
  [Species.CHARMANDER]: [
    Moves.DRAGON_DANCE,
    Moves.BITTER_BLADE,
    Moves.EARTH_POWER,
    Moves.OBLIVION_WING
  ],
  [Species.SQUIRTLE]: [Moves.ICE_BEAM, Moves.DARK_PULSE, Moves.BOUNCY_BUBBLE, Moves.ORIGIN_PULSE],
  [Species.CATERPIE]: [
    Moves.SANDSEAR_STORM,
    Moves.SILK_TRAP,
    Moves.TWIN_BEAM,
    Moves.BLEAKWIND_STORM
  ],
  [Species.WEEDLE]: [
    Moves.THOUSAND_ARROWS,
    Moves.SWORDS_DANCE,
    Moves.ATTACK_ORDER,
    Moves.NOXIOUS_TORQUE
  ],
  [Species.PIDGEY]: [Moves.HEAT_WAVE, Moves.FOCUS_BLAST, Moves.U_TURN, Moves.WILDBOLT_STORM],
  [Species.RATTATA]: [Moves.HYPER_FANG, Moves.PSYCHIC_FANGS, Moves.FIRE_FANG, Moves.EXTREME_SPEED],
  [Species.SPEAROW]: [Moves.FLOATY_FALL, Moves.EXTREME_SPEED, Moves.TIDY_UP, Moves.TRIPLE_ARROWS],
  [Species.EKANS]: [Moves.NOXIOUS_TORQUE, Moves.DRAGON_DANCE, Moves.SLACK_OFF, Moves.SHED_TAIL],
  [Species.SANDSHREW]: [
    Moves.HIGH_HORSEPOWER,
    Moves.CEASELESS_EDGE,
    Moves.SHORE_UP,
    Moves.MIGHTY_CLEAVE
  ],
  [Species.NIDORAN_F]: [
    Moves.NO_RETREAT,
    Moves.BANEFUL_BUNKER,
    Moves.SANDSEAR_STORM,
    Moves.MALIGNANT_CHAIN
  ],
  [Species.NIDORAN_M]: [
    Moves.NOXIOUS_TORQUE,
    Moves.KINGS_SHIELD,
    Moves.NO_RETREAT,
    Moves.PRECIPICE_BLADES
  ],
  [Species.VULPIX]: [Moves.MOONBLAST, Moves.ICE_BEAM, Moves.MORNING_SUN, Moves.TAIL_GLOW],
  [Species.ZUBAT]: [Moves.FLOATY_FALL, Moves.DIRE_CLAW, Moves.SWORDS_DANCE, Moves.WICKED_BLOW],
  [Species.ODDISH]: [Moves.SLUDGE_BOMB, Moves.FIERY_DANCE, Moves.BOUNCY_BUBBLE, Moves.SPORE],
  [Species.PARAS]: [Moves.LEECH_LIFE, Moves.HORN_LEECH, Moves.CRABHAMMER, Moves.SAPPY_SEED],
  [Species.VENONAT]: [Moves.SLUDGE_BOMB, Moves.MOONLIGHT, Moves.EARTH_POWER, Moves.MYSTICAL_POWER],
  [Species.DIGLETT]: [Moves.REVERSAL, Moves.SWORDS_DANCE, Moves.TRIPLE_AXEL, Moves.HEADLONG_RUSH],
  [Species.MEOWTH]: [Moves.COVET, Moves.SWORDS_DANCE, Moves.DOUBLE_KICK, Moves.TAIL_SLAP],
  [Species.PSYDUCK]: [
    Moves.SPLISHY_SPLASH,
    Moves.AQUA_STEP,
    Moves.AURA_SPHERE,
    Moves.MYSTICAL_POWER
  ],
  [Species.MANKEY]: [Moves.DRAIN_PUNCH, Moves.PLAY_ROUGH, Moves.METEOR_MASH, Moves.NO_RETREAT],
  [Species.GROWLITHE]: [Moves.ZING_ZAP, Moves.PARTING_SHOT, Moves.MORNING_SUN, Moves.SACRED_FIRE],
  [Species.POLIWAG]: [
    Moves.SLACK_OFF,
    Moves.WILDBOLT_STORM,
    Moves.DRAIN_PUNCH,
    Moves.SURGING_STRIKES
  ],
  [Species.ABRA]: [Moves.MOONBLAST, Moves.FLAMETHROWER, Moves.THUNDERBOLT, Moves.PSYSTRIKE],
  [Species.MACHOP]: [Moves.COMBAT_TORQUE, Moves.METEOR_MASH, Moves.MOUNTAIN_GALE, Moves.FISSURE],
  [Species.BELLSPROUT]: [
    Moves.SOLAR_BLADE,
    Moves.STRENGTH_SAP,
    Moves.FIRE_LASH,
    Moves.VICTORY_DANCE
  ],
  [Species.TENTACOOL]: [
    Moves.BANEFUL_BUNKER,
    Moves.STRENGTH_SAP,
    Moves.BOUNCY_BUBBLE,
    Moves.MALIGNANT_CHAIN
  ],
  [Species.GEODUDE]: [Moves.BODY_PRESS, Moves.BULK_UP, Moves.SHORE_UP, Moves.HEAD_SMASH],
  [Species.PONYTA]: [Moves.HIGH_HORSEPOWER, Moves.FIRE_LASH, Moves.SWORDS_DANCE, Moves.VOLT_TACKLE],
  [Species.SLOWPOKE]: [
    Moves.BOUNCY_BUBBLE,
    Moves.FLAMETHROWER,
    Moves.MYSTICAL_POWER,
    Moves.SHED_TAIL
  ],
  [Species.MAGNEMITE]: [
    Moves.PARABOLIC_CHARGE,
    Moves.BODY_PRESS,
    Moves.ICE_BEAM,
    Moves.THUNDERCLAP
  ],
  [Species.FARFETCHD]: [Moves.BATON_PASS, Moves.SACRED_SWORD, Moves.ROOST, Moves.VICTORY_DANCE],
  [Species.DODUO]: [Moves.TRIPLE_AXEL, Moves.MULTI_ATTACK, Moves.FLOATY_FALL, Moves.TRIPLE_ARROWS],
  [Species.SEEL]: [Moves.FREEZE_DRY, Moves.BOUNCY_BUBBLE, Moves.SLACK_OFF, Moves.STEAM_ERUPTION],
  [Species.GRIMER]: [Moves.SUCKER_PUNCH, Moves.CURSE, Moves.STRENGTH_SAP, Moves.NOXIOUS_TORQUE],
  [Species.SHELLDER]: [
    Moves.ROCK_BLAST,
    Moves.WATER_SHURIKEN,
    Moves.BANEFUL_BUNKER,
    Moves.BONE_RUSH
  ],
  [Species.GASTLY]: [Moves.SLUDGE_BOMB, Moves.AURA_SPHERE, Moves.NASTY_PLOT, Moves.ASTRAL_BARRAGE],
  [Species.ONIX]: [Moves.SHORE_UP, Moves.BODY_PRESS, Moves.HEAVY_SLAM, Moves.DIAMOND_STORM],
  [Species.DROWZEE]: [Moves.DREAM_EATER, Moves.RECOVER, Moves.LUMINA_CRASH, Moves.DARK_VOID],
  [Species.KRABBY]: [Moves.ICICLE_CRASH, Moves.LIQUIDATION, Moves.IVY_CUDGEL, Moves.SHELL_SMASH],
  [Species.VOLTORB]: [Moves.RISING_VOLTAGE, Moves.OVERHEAT, Moves.ICE_BEAM, Moves.NASTY_PLOT],
  [Species.EXEGGCUTE]: [
    Moves.MYSTICAL_POWER,
    Moves.APPLE_ACID,
    Moves.TRICK_ROOM,
    Moves.FICKLE_BEAM
  ],
  [Species.CUBONE]: [Moves.HEAD_SMASH, Moves.WOOD_HAMMER, Moves.SHADOW_SNEAK, Moves.BITTER_BLADE],
  [Species.LICKITUNG]: [Moves.BODY_SLAM, Moves.FIRE_LASH, Moves.GRAV_APPLE, Moves.MILK_DRINK],
  [Species.KOFFING]: [Moves.SCALD, Moves.RECOVER, Moves.MOONBLAST, Moves.MALIGNANT_CHAIN],
  [Species.RHYHORN]: [Moves.SHORE_UP, Moves.ICE_HAMMER, Moves.ACCELEROCK, Moves.HEAD_SMASH],
  [Species.TANGELA]: [Moves.STRENGTH_SAP, Moves.INFESTATION, Moves.PARTING_SHOT, Moves.SAPPY_SEED],
  [Species.KANGASKHAN]: [Moves.POWER_UP_PUNCH, Moves.TRAILBLAZE, Moves.FACADE, Moves.SEISMIC_TOSS],
  [Species.HORSEA]: [Moves.SNIPE_SHOT, Moves.FROST_BREATH, Moves.HURRICANE, Moves.DRAGON_ENERGY],
  [Species.GOLDEEN]: [Moves.DRILL_RUN, Moves.FLIP_TURN, Moves.DRAGON_DANCE, Moves.FISHIOUS_REND],
  [Species.STARYU]: [Moves.CALM_MIND, Moves.BOUNCY_BUBBLE, Moves.MOONBLAST, Moves.MYSTICAL_POWER],
  [Species.SCYTHER]: [
    Moves.MIGHTY_CLEAVE,
    Moves.BUG_BITE,
    Moves.STORM_THROW,
    Moves.DOUBLE_IRON_BASH
  ],
  [Species.PINSIR]: [Moves.EARTHQUAKE, Moves.LEECH_LIFE, Moves.CLOSE_COMBAT, Moves.EXTREME_SPEED],
  [Species.TAUROS]: [
    Moves.HIGH_HORSEPOWER,
    Moves.BLAZING_TORQUE,
    Moves.LIQUIDATION,
    Moves.COMBAT_TORQUE
  ],
  [Species.MAGIKARP]: [Moves.FLIP_TURN, Moves.ICE_SPINNER, Moves.POWER_TRIP, Moves.DRAGON_ASCENT],
  [Species.LAPRAS]: [Moves.RECOVER, Moves.FREEZE_DRY, Moves.SHELL_SMASH, Moves.STEAM_ERUPTION],
  [Species.DITTO]: [Moves.MIMIC, Moves.COPYCAT, Moves.ME_FIRST, Moves.METRONOME],
  [Species.EEVEE]: [Moves.WISH, Moves.REVELATION_DANCE, Moves.ZIPPY_ZAP, Moves.NO_RETREAT],
  [Species.PORYGON]: [Moves.THUNDERCLAP, Moves.AURA_SPHERE, Moves.FLAMETHROWER, Moves.TECHNO_BLAST],
  [Species.OMANYTE]: [Moves.FREEZE_DRY, Moves.EARTH_POWER, Moves.POWER_GEM, Moves.STEAM_ERUPTION],
  [Species.KABUTO]: [
    Moves.CEASELESS_EDGE,
    Moves.HIGH_HORSEPOWER,
    Moves.RAZOR_SHELL,
    Moves.MIGHTY_CLEAVE
  ],
  [Species.AERODACTYL]: [
    Moves.FLOATY_FALL,
    Moves.HEAD_SMASH,
    Moves.SWORDS_DANCE,
    Moves.MIGHTY_CLEAVE
  ],
  [Species.ARTICUNO]: [Moves.AURA_SPHERE, Moves.CALM_MIND, Moves.AURORA_VEIL, Moves.AEROBLAST],
  [Species.ZAPDOS]: [Moves.WEATHER_BALL, Moves.CALM_MIND, Moves.SANDSEAR_STORM, Moves.ELECTRO_SHOT],
  [Species.MOLTRES]: [Moves.SCORCHING_SANDS, Moves.CALM_MIND, Moves.AEROBLAST, Moves.TORCH_SONG],
  [Species.DRATINI]: [Moves.DRAGON_HAMMER, Moves.FLOATY_FALL, Moves.FIRE_LASH, Moves.MULTI_ATTACK],
  [Species.MEWTWO]: [Moves.METEOR_MASH, Moves.MOONBLAST, Moves.PLASMA_FISTS, Moves.PHOTON_GEYSER],
  [Species.MEW]: [Moves.PHOTON_GEYSER, Moves.MOONBLAST, Moves.ASTRAL_BARRAGE, Moves.SHELL_SMASH],
  [Species.CHIKORITA]: [Moves.SPORE, Moves.STONE_AXE, Moves.DRAGON_DANCE, Moves.SAPPY_SEED],
  [Species.CYNDAQUIL]: [
    Moves.NASTY_PLOT,
    Moves.SCORCHING_SANDS,
    Moves.FIERY_DANCE,
    Moves.ELECTRO_DRIFT
  ],
  [Species.TOTODILE]: [
    Moves.THUNDER_PUNCH,
    Moves.DRAGON_DANCE,
    Moves.TRIPLE_AXEL,
    Moves.FISHIOUS_REND
  ],
  [Species.SENTRET]: [Moves.TIDY_UP, Moves.THIEF, Moves.NUZZLE, Moves.EXTREME_SPEED],
  [Species.HOOTHOOT]: [Moves.CALM_MIND, Moves.ESPER_WING, Moves.BOOMBURST, Moves.OBLIVION_WING],
  [Species.LEDYBA]: [Moves.POLLEN_PUFF, Moves.THIEF, Moves.PARTING_SHOT, Moves.SPORE],
  [Species.SPINARAK]: [
    Moves.PARTING_SHOT,
    Moves.ATTACK_ORDER,
    Moves.GASTRO_ACID,
    Moves.STRENGTH_SAP
  ],
  [Species.CHINCHOU]: [Moves.THUNDERCLAP, Moves.BOUNCY_BUBBLE, Moves.VOLT_SWITCH, Moves.TAIL_GLOW],
  [Species.PICHU]: [
    Moves.RISING_VOLTAGE,
    Moves.SPLISHY_SPLASH,
    Moves.FLOATY_FALL,
    Moves.THUNDERCLAP
  ],
  [Species.CLEFFA]: [Moves.TAKE_HEART, Moves.POWER_GEM, Moves.WISH, Moves.LIGHT_OF_RUIN],
  [Species.IGGLYBUFF]: [
    Moves.DRAIN_PUNCH,
    Moves.GRAV_APPLE,
    Moves.SOFT_BOILED,
    Moves.EXTREME_SPEED
  ],
  [Species.TOGEPI]: [Moves.SCORCHING_SANDS, Moves.ROOST, Moves.MOONBLAST, Moves.FIERY_DANCE],
  [Species.NATU]: [Moves.AEROBLAST, Moves.ROOST, Moves.CALM_MIND, Moves.LUMINA_CRASH],
  [Species.MAREEP]: [Moves.ICE_BEAM, Moves.PARABOLIC_CHARGE, Moves.CORE_ENFORCER, Moves.TAIL_GLOW],
  [Species.HOPPIP]: [Moves.FLOATY_FALL, Moves.STRENGTH_SAP, Moves.SPORE, Moves.SAPPY_SEED],
  [Species.AIPOM]: [Moves.TIDY_UP, Moves.STORM_THROW, Moves.FAKE_OUT, Moves.POPULATION_BOMB],
  [Species.SUNKERN]: [Moves.SPORE, Moves.SAPPY_SEED, Moves.FIERY_DANCE, Moves.HYDRO_STEAM],
  [Species.YANMA]: [Moves.NASTY_PLOT, Moves.EARTH_POWER, Moves.HEAT_WAVE, Moves.BLEAKWIND_STORM],
  [Species.WOOPER]: [Moves.SIZZLY_SLIDE, Moves.RECOVER, Moves.CURSE, Moves.SURGING_STRIKES],
  [Species.MURKROW]: [Moves.TRIPLE_ARROWS, Moves.FLOATY_FALL, Moves.TIDY_UP, Moves.WICKED_BLOW],
  [Species.MISDREAVUS]: [
    Moves.TAKE_HEART,
    Moves.MOONBLAST,
    Moves.AURA_SPHERE,
    Moves.ASTRAL_BARRAGE
  ],
  [Species.UNOWN]: [
    Moves.NATURE_POWER,
    Moves.COSMIC_POWER,
    Moves.ANCIENT_POWER,
    Moves.MYSTICAL_POWER
  ],
  [Species.GIRAFARIG]: [Moves.MYSTICAL_POWER, Moves.NIGHT_DAZE, Moves.RECOVER, Moves.BOOMBURST],
  [Species.PINECO]: [Moves.METAL_BURST, Moves.LUNGE, Moves.BODY_PRESS, Moves.SHORE_UP],
  [Species.DUNSPARCE]: [
    Moves.BODY_SLAM,
    Moves.MAGICAL_TORQUE,
    Moves.BLAZING_TORQUE,
    Moves.EXTREME_SPEED
  ],
  [Species.GLIGAR]: [Moves.FLOATY_FALL, Moves.THOUSAND_WAVES, Moves.ROOST, Moves.MIGHTY_CLEAVE],
  [Species.SNUBBULL]: [Moves.FACADE, Moves.EARTHQUAKE, Moves.SWORDS_DANCE, Moves.EXTREME_SPEED],
  [Species.QWILFISH]: [
    Moves.BARB_BARRAGE,
    Moves.BANEFUL_BUNKER,
    Moves.KNOCK_OFF,
    Moves.FISHIOUS_REND
  ],
  [Species.SHUCKLE]: [Moves.STUFF_CHEEKS, Moves.HEAL_ORDER, Moves.BODY_PRESS, Moves.SALT_CURE],
  [Species.HERACROSS]: [
    Moves.ROCK_BLAST,
    Moves.FIRST_IMPRESSION,
    Moves.ICICLE_SPEAR,
    Moves.DRAGON_DANCE
  ],
  [Species.SNEASEL]: [Moves.DIRE_CLAW, Moves.SUCKER_PUNCH, Moves.TRIPLE_AXEL, Moves.WICKED_BLOW],
  [Species.TEDDIURSA]: [Moves.DIRE_CLAW, Moves.FACADE, Moves.BULK_UP, Moves.SLACK_OFF],
  [Species.SLUGMA]: [Moves.BURNING_BULWARK, Moves.POWER_GEM, Moves.SOLAR_BEAM, Moves.MAGMA_STORM],
  [Species.SWINUB]: [
    Moves.ICE_SPINNER,
    Moves.HEADLONG_RUSH,
    Moves.MIGHTY_CLEAVE,
    Moves.GLACIAL_LANCE
  ],
  [Species.CORSOLA]: [Moves.SCALD, Moves.FREEZE_DRY, Moves.STRENGTH_SAP, Moves.SALT_CURE],
  [Species.REMORAID]: [
    Moves.WATER_SHURIKEN,
    Moves.SNIPE_SHOT,
    Moves.SEARING_SHOT,
    Moves.ELECTRO_SHOT
  ],
  [Species.DELIBIRD]: [Moves.DRILL_RUN, Moves.FLOATY_FALL, Moves.NO_RETREAT, Moves.GLACIAL_LANCE],
  [Species.SKARMORY]: [Moves.ROOST, Moves.BODY_PRESS, Moves.SPIKY_SHIELD, Moves.BEAK_BLAST],
  [Species.HOUNDOUR]: [Moves.HEAT_WAVE, Moves.FIERY_WRATH, Moves.SOLAR_BEAM, Moves.HYDRO_STEAM],
  [Species.PHANPY]: [
    Moves.SHORE_UP,
    Moves.SWORDS_DANCE,
    Moves.ICICLE_CRASH,
    Moves.COLLISION_COURSE
  ],
  [Species.STANTLER]: [
    Moves.THUNDEROUS_KICK,
    Moves.HYPER_VOICE,
    Moves.BULK_UP,
    Moves.PHOTON_GEYSER
  ],
  [Species.SMEARGLE]: [Moves.CONVERSION, Moves.BURNING_BULWARK, Moves.SALT_CURE, Moves.DARK_VOID],
  [Species.TYROGUE]: [
    Moves.VICTORY_DANCE,
    Moves.WICKED_TORQUE,
    Moves.METEOR_MASH,
    Moves.COLLISION_COURSE
  ],
  [Species.SMOOCHUM]: [
    Moves.EXPANDING_FORCE,
    Moves.AURA_SPHERE,
    Moves.FREEZY_FROST,
    Moves.QUIVER_DANCE
  ],
  [Species.ELEKID]: [Moves.BLAZING_TORQUE, Moves.TIDY_UP, Moves.MOUNTAIN_GALE, Moves.ZIPPY_ZAP],
  [Species.MAGBY]: [Moves.THUNDERCLAP, Moves.EARTH_POWER, Moves.ARMOR_CANNON, Moves.FLEUR_CANNON],
  [Species.MILTANK]: [Moves.BODY_PRESS, Moves.BULK_UP, Moves.YAWN, Moves.SIZZLY_SLIDE],
  [Species.RAIKOU]: [Moves.THUNDERCLAP, Moves.NASTY_PLOT, Moves.ICE_BEAM, Moves.PARABOLIC_CHARGE],
  [Species.ENTEI]: [
    Moves.BURNING_BULWARK,
    Moves.DRAGON_DANCE,
    Moves.EARTHQUAKE,
    Moves.MIGHTY_CLEAVE
  ],
  [Species.SUICUNE]: [Moves.RECOVER, Moves.NASTY_PLOT, Moves.FREEZE_DRY, Moves.STEAM_ERUPTION],
  [Species.LARVITAR]: [
    Moves.DRAGON_DANCE,
    Moves.MOUNTAIN_GALE,
    Moves.SHORE_UP,
    Moves.DIAMOND_STORM
  ],
  [Species.LUGIA]: [Moves.TAKE_HEART, Moves.STORED_POWER, Moves.SCALD, Moves.OBLIVION_WING],
  [Species.HO_OH]: [Moves.SWORDS_DANCE, Moves.EARTHQUAKE, Moves.BRAVE_BIRD, Moves.REVIVAL_BLESSING],
  [Species.CELEBI]: [
    Moves.MYSTICAL_POWER,
    Moves.STORED_POWER,
    Moves.COSMIC_POWER,
    Moves.SEED_FLARE
  ],
  [Species.TREECKO]: [Moves.NASTY_PLOT, Moves.DRAGON_ENERGY, Moves.SECRET_SWORD, Moves.SEED_FLARE],
  [Species.TORCHIC]: [Moves.HIGH_JUMP_KICK, Moves.SUPERCELL_SLAM, Moves.KNOCK_OFF, Moves.V_CREATE],
  [Species.MUDKIP]: [Moves.SHORE_UP, Moves.ICICLE_CRASH, Moves.BULK_UP, Moves.SURGING_STRIKES],
  [Species.POOCHYENA]: [Moves.JAW_LOCK, Moves.CLOSE_COMBAT, Moves.DIRE_CLAW, Moves.NO_RETREAT],
  [Species.ZIGZAGOON]: [Moves.EXTREME_SPEED, Moves.NUZZLE, Moves.HIGH_HORSEPOWER, Moves.TIDY_UP],
  [Species.WURMPLE]: [
    Moves.BATON_PASS,
    Moves.BLEAKWIND_STORM,
    Moves.STORED_POWER,
    Moves.MALIGNANT_CHAIN
  ],
  [Species.LOTAD]: [Moves.REVELATION_DANCE, Moves.APPLE_ACID, Moves.ICE_BEAM, Moves.QUIVER_DANCE],
  [Species.SEEDOT]: [
    Moves.SWORDS_DANCE,
    Moves.SACRED_SWORD,
    Moves.KOWTOW_CLEAVE,
    Moves.BITTER_BLADE
  ],
  [Species.TAILLOW]: [Moves.BOOMBURST, Moves.FACADE, Moves.HEADLONG_RUSH, Moves.NO_RETREAT],
  [Species.WINGULL]: [Moves.THUNDER, Moves.FLIP_TURN, Moves.CALM_MIND, Moves.STEAM_ERUPTION],
  [Species.RALTS]: [Moves.PSYBLADE, Moves.BITTER_BLADE, Moves.NO_RETREAT, Moves.BOOMBURST],
  [Species.SURSKIT]: [Moves.POLLEN_PUFF, Moves.FIERY_DANCE, Moves.BOUNCY_BUBBLE, Moves.AEROBLAST],
  [Species.SHROOMISH]: [Moves.ACCELEROCK, Moves.TRAILBLAZE, Moves.STORM_THROW, Moves.SAPPY_SEED],
  [Species.SLAKOTH]: [Moves.FACADE, Moves.DRAIN_PUNCH, Moves.KNOCK_OFF, Moves.SKILL_SWAP],
  [Species.NINCADA]: [
    Moves.ATTACK_ORDER,
    Moves.STICKY_WEB,
    Moves.SPIRIT_SHACKLE,
    Moves.SHELL_SMASH
  ],
  [Species.WHISMUR]: [
    Moves.ALLURING_VOICE,
    Moves.TRICK_ROOM,
    Moves.SPARKLING_ARIA,
    Moves.TORCH_SONG
  ],
  [Species.MAKUHITA]: [
    Moves.STORM_THROW,
    Moves.SLACK_OFF,
    Moves.HEAT_CRASH,
    Moves.DOUBLE_IRON_BASH
  ],
  [Species.AZURILL]: [
    Moves.JET_PUNCH,
    Moves.MAGICAL_TORQUE,
    Moves.SWORDS_DANCE,
    Moves.SURGING_STRIKES
  ],
  [Species.NOSEPASS]: [Moves.SHORE_UP, Moves.BODY_PRESS, Moves.CALM_MIND, Moves.TACHYON_CUTTER],
  [Species.SKITTY]: [Moves.THUNDEROUS_KICK, Moves.ENTRAINMENT, Moves.TIDY_UP, Moves.V_CREATE],
  [Species.SABLEYE]: [Moves.RECOVER, Moves.TOPSY_TURVY, Moves.CURSE, Moves.SALT_CURE],
  [Species.MAWILE]: [
    Moves.BULLET_PUNCH,
    Moves.MAGICAL_TORQUE,
    Moves.EARTHQUAKE,
    Moves.DOUBLE_IRON_BASH
  ],
  [Species.ARON]: [Moves.HEAD_SMASH, Moves.BODY_PRESS, Moves.SHORE_UP, Moves.SALT_CURE],
  [Species.MEDITITE]: [
    Moves.THUNDEROUS_KICK,
    Moves.SUCKER_PUNCH,
    Moves.BULLET_PUNCH,
    Moves.PHOTON_GEYSER
  ],
  [Species.ELECTRIKE]: [Moves.RISING_VOLTAGE, Moves.FLAMETHROWER, Moves.NASTY_PLOT, Moves.ICE_BEAM],
  [Species.PLUSLE]: [Moves.FLAMETHROWER, Moves.GLITZY_GLOW, Moves.SPLISHY_SPLASH, Moves.TAIL_GLOW],
  [Species.MINUN]: [Moves.ICE_BEAM, Moves.BADDY_BAD, Moves.SPARKLY_SWIRL, Moves.TAIL_GLOW],
  [Species.VOLBEAT]: [Moves.BATON_PASS, Moves.LUNGE, Moves.DECORATE, Moves.VICTORY_DANCE],
  [Species.ILLUMISE]: [Moves.PARTING_SHOT, Moves.GLITZY_GLOW, Moves.POWDER, Moves.QUIVER_DANCE],
  [Species.GULPIN]: [Moves.STRENGTH_SAP, Moves.EARTH_POWER, Moves.GROWTH, Moves.MALIGNANT_CHAIN],
  [Species.CARVANHA]: [
    Moves.THUNDER_FANG,
    Moves.SWORDS_DANCE,
    Moves.OBSTRUCT,
    Moves.SURGING_STRIKES
  ],
  [Species.WAILMER]: [Moves.TAKE_HEART, Moves.BOUNCY_BUBBLE, Moves.SLACK_OFF, Moves.COMEUPPANCE],
  [Species.NUMEL]: [Moves.TRICK_ROOM, Moves.ENERGY_BALL, Moves.MORNING_SUN, Moves.BLUE_FLARE],
  [Species.TORKOAL]: [
    Moves.MORNING_SUN,
    Moves.BURNING_BULWARK,
    Moves.BODY_PRESS,
    Moves.HYDRO_STEAM
  ],
  [Species.SPOINK]: [Moves.AURA_SPHERE, Moves.MILK_DRINK, Moves.EXPANDING_FORCE, Moves.TAIL_GLOW],
  [Species.SPINDA]: [Moves.SUPERPOWER, Moves.SLACK_OFF, Moves.FLEUR_CANNON, Moves.V_CREATE],
  [Species.TRAPINCH]: [
    Moves.FIRE_LASH,
    Moves.DRAGON_DARTS,
    Moves.THOUSAND_ARROWS,
    Moves.DRAGON_ENERGY
  ],
  [Species.CACNEA]: [Moves.EARTH_POWER, Moves.CEASELESS_EDGE, Moves.NIGHT_DAZE, Moves.IVY_CUDGEL],
  [Species.SWABLU]: [Moves.ROOST, Moves.NASTY_PLOT, Moves.FLOATY_FALL, Moves.BOOMBURST],
  [Species.ZANGOOSE]: [Moves.FACADE, Moves.HIGH_HORSEPOWER, Moves.EXTREME_SPEED, Moves.TIDY_UP],
  [Species.SEVIPER]: [Moves.ICE_BEAM, Moves.BITTER_BLADE, Moves.SUCKER_PUNCH, Moves.NO_RETREAT],
  [Species.LUNATONE]: [Moves.POWER_GEM, Moves.NIGHT_DAZE, Moves.SHELL_SMASH, Moves.LUMINA_CRASH],
  [Species.SOLROCK]: [
    Moves.PSYSHIELD_BASH,
    Moves.MIGHTY_CLEAVE,
    Moves.SHELL_SMASH,
    Moves.SACRED_FIRE
  ],
  [Species.BARBOACH]: [
    Moves.DRAGON_DANCE,
    Moves.ZING_ZAP,
    Moves.ICE_SPINNER,
    Moves.SURGING_STRIKES
  ],
  [Species.CORPHISH]: [
    Moves.CEASELESS_EDGE,
    Moves.JET_PUNCH,
    Moves.SUCKER_PUNCH,
    Moves.SHELL_SMASH
  ],
  [Species.BALTOY]: [Moves.RECOVER, Moves.STORED_POWER, Moves.BODY_PRESS, Moves.MYSTICAL_POWER],
  [Species.LILEEP]: [Moves.POWER_GEM, Moves.SCALD, Moves.STRENGTH_SAP, Moves.SAPPY_SEED],
  [Species.ANORITH]: [
    Moves.FIRST_IMPRESSION,
    Moves.LEECH_LIFE,
    Moves.DRAGON_DANCE,
    Moves.MIGHTY_CLEAVE
  ],
  [Species.FEEBAS]: [Moves.CALM_MIND, Moves.FREEZE_DRY, Moves.MOONBLAST, Moves.STEAM_ERUPTION],
  [Species.CASTFORM]: [Moves.BOOMBURST, Moves.HYDRO_STEAM, Moves.ERUPTION, Moves.QUIVER_DANCE],
  [Species.KECLEON]: [
    Moves.DRAIN_PUNCH,
    Moves.DRAGON_DANCE,
    Moves.EXTREME_SPEED,
    Moves.MULTI_ATTACK
  ],
  [Species.SHUPPET]: [Moves.STORM_THROW, Moves.TIDY_UP, Moves.PARTING_SHOT, Moves.SPECTRAL_THIEF],
  [Species.DUSKULL]: [Moves.BULK_UP, Moves.DRAIN_PUNCH, Moves.STRENGTH_SAP, Moves.RAGE_FIST],
  [Species.TROPIUS]: [Moves.STUFF_CHEEKS, Moves.EARTH_POWER, Moves.APPLE_ACID, Moves.SAPPY_SEED],
  [Species.ABSOL]: [Moves.KOWTOW_CLEAVE, Moves.SACRED_SWORD, Moves.PSYBLADE, Moves.BITTER_BLADE],
  [Species.WYNAUT]: [Moves.RECOVER, Moves.SHED_TAIL, Moves.TAUNT, Moves.COMEUPPANCE],
  [Species.SNORUNT]: [Moves.AURORA_VEIL, Moves.HYPER_VOICE, Moves.EARTH_POWER, Moves.NO_RETREAT],
  [Species.SPHEAL]: [Moves.FLIP_TURN, Moves.FREEZE_DRY, Moves.SLACK_OFF, Moves.STEAM_ERUPTION],
  [Species.CLAMPERL]: [
    Moves.ICE_SPINNER,
    Moves.LIQUIDATION,
    Moves.EARTH_POWER,
    Moves.STEAM_ERUPTION
  ],
  [Species.RELICANTH]: [Moves.BODY_PRESS, Moves.SHORE_UP, Moves.WAVE_CRASH, Moves.FISHIOUS_REND],
  [Species.LUVDISC]: [
    Moves.BATON_PASS,
    Moves.HEART_SWAP,
    Moves.GLITZY_GLOW,
    Moves.REVIVAL_BLESSING
  ],
  [Species.BAGON]: [Moves.FLOATY_FALL, Moves.FIRE_LASH, Moves.DRAGON_DANCE, Moves.GLAIVE_RUSH],
  [Species.BELDUM]: [Moves.HIGH_HORSEPOWER, Moves.RECOVER, Moves.TRIPLE_AXEL, Moves.SHIFT_GEAR],
  [Species.REGIROCK]: [Moves.STONE_AXE, Moves.BODY_PRESS, Moves.RECOVER, Moves.SALT_CURE],
  [Species.REGICE]: [Moves.EARTH_POWER, Moves.TAKE_HEART, Moves.RECOVER, Moves.FREEZE_DRY],
  [Species.REGISTEEL]: [
    Moves.BODY_PRESS,
    Moves.THOUSAND_WAVES,
    Moves.RECOVER,
    Moves.GIGATON_HAMMER
  ],
  [Species.LATIAS]: [
    Moves.CORE_ENFORCER,
    Moves.SEARING_SHOT,
    Moves.DRAGON_ENERGY,
    Moves.QUIVER_DANCE
  ],
  [Species.LATIOS]: [
    Moves.CORE_ENFORCER,
    Moves.SEARING_SHOT,
    Moves.DRAGON_ENERGY,
    Moves.QUIVER_DANCE
  ],
  [Species.KYOGRE]: [Moves.BOUNCY_BUBBLE, Moves.HURRICANE, Moves.THUNDER, Moves.TAIL_GLOW],
  [Species.GROUDON]: [Moves.STONE_AXE, Moves.SOLAR_BLADE, Moves.MORNING_SUN, Moves.SACRED_FIRE],
  [Species.RAYQUAZA]: [
    Moves.V_CREATE,
    Moves.DRAGON_DARTS,
    Moves.DRAGON_ENERGY,
    Moves.OBLIVION_WING
  ],
  [Species.JIRACHI]: [Moves.IRON_HEAD, Moves.FLOATY_FALL, Moves.ROCK_SLIDE, Moves.SHIFT_GEAR],
  [Species.DEOXYS]: [
    Moves.COLLISION_COURSE,
    Moves.EARTH_POWER,
    Moves.PARTING_SHOT,
    Moves.LUMINA_CRASH
  ],
  [Species.TURTWIG]: [Moves.SHELL_SMASH, Moves.MIGHTY_CLEAVE, Moves.ICE_SPINNER, Moves.SAPPY_SEED],
  [Species.CHIMCHAR]: [Moves.FIERY_DANCE, Moves.SECRET_SWORD, Moves.TRIPLE_AXEL, Moves.SACRED_FIRE],
  [Species.PIPLUP]: [Moves.KINGS_SHIELD, Moves.TACHYON_CUTTER, Moves.ROOST, Moves.STEAM_ERUPTION],
  [Species.STARLY]: [Moves.SWORDS_DANCE, Moves.HEAD_CHARGE, Moves.FLARE_BLITZ, Moves.EXTREME_SPEED],
  [Species.BIDOOF]: [Moves.EXTREME_SPEED, Moves.COSMIC_POWER, Moves.POWER_TRIP, Moves.AQUA_STEP],
  [Species.KRICKETOT]: [
    Moves.BONEMERANG,
    Moves.VICTORY_DANCE,
    Moves.STONE_AXE,
    Moves.POPULATION_BOMB
  ],
  [Species.SHINX]: [Moves.FIRE_LASH, Moves.TRIPLE_AXEL, Moves.FACADE, Moves.BOLT_STRIKE],
  [Species.BUDEW]: [Moves.FIERY_DANCE, Moves.SLUDGE_WAVE, Moves.SPORE, Moves.QUIVER_DANCE],
  [Species.CRANIDOS]: [
    Moves.DRAGON_DANCE,
    Moves.ACCELEROCK,
    Moves.HEADLONG_RUSH,
    Moves.VOLT_TACKLE
  ],
  [Species.SHIELDON]: [Moves.SHORE_UP, Moves.BODY_PRESS, Moves.KINGS_SHIELD, Moves.DIAMOND_STORM],
  [Species.BURMY]: [Moves.BODY_PRESS, Moves.DEFEND_ORDER, Moves.HEAL_ORDER, Moves.SAPPY_SEED],
  [Species.COMBEE]: [Moves.SPORE, Moves.FLOATY_FALL, Moves.KINGS_SHIELD, Moves.VICTORY_DANCE],
  [Species.PACHIRISU]: [Moves.BADDY_BAD, Moves.SIZZLY_SLIDE, Moves.U_TURN, Moves.ZIPPY_ZAP],
  [Species.BUIZEL]: [
    Moves.JET_PUNCH,
    Moves.TRIPLE_AXEL,
    Moves.SUPERCELL_SLAM,
    Moves.SURGING_STRIKES
  ],
  [Species.CHERUBI]: [Moves.SPORE, Moves.STRENGTH_SAP, Moves.FIERY_DANCE, Moves.FLOWER_TRICK],
  [Species.SHELLOS]: [
    Moves.BOUNCY_BUBBLE,
    Moves.SCORCHING_SANDS,
    Moves.FREEZE_DRY,
    Moves.STEAM_ERUPTION
  ],
  [Species.DRIFLOON]: [Moves.WILL_O_WISP, Moves.MIND_BLOWN, Moves.CALM_MIND, Moves.OBLIVION_WING],
  [Species.BUNEARY]: [
    Moves.TRIPLE_AXEL,
    Moves.SWORDS_DANCE,
    Moves.THUNDEROUS_KICK,
    Moves.MULTI_ATTACK
  ],
  [Species.GLAMEOW]: [Moves.U_TURN, Moves.HIGH_HORSEPOWER, Moves.BULK_UP, Moves.EXTREME_SPEED],
  [Species.CHINGLING]: [Moves.BUZZY_BUZZ, Moves.EERIE_SPELL, Moves.TORCH_SONG, Moves.BOOMBURST],
  [Species.STUNKY]: [Moves.CEASELESS_EDGE, Moves.KNOCK_OFF, Moves.RECOVER, Moves.DIRE_CLAW],
  [Species.BRONZOR]: [Moves.RECOVER, Moves.TACHYON_CUTTER, Moves.GLARE, Moves.LUMINA_CRASH],
  [Species.BONSLY]: [Moves.STONE_AXE, Moves.LEAF_BLADE, Moves.STRENGTH_SAP, Moves.HEAD_SMASH],
  [Species.MIME_JR]: [Moves.CALM_MIND, Moves.MOONBLAST, Moves.SIZZLY_SLIDE, Moves.LUMINA_CRASH],
  [Species.HAPPINY]: [
    Moves.COTTON_GUARD,
    Moves.SEISMIC_TOSS,
    Moves.SIZZLY_SLIDE,
    Moves.REVIVAL_BLESSING
  ],
  [Species.CHATOT]: [Moves.SPARKLING_ARIA, Moves.TORCH_SONG, Moves.BATON_PASS, Moves.BOOMBURST],
  [Species.SPIRITOMB]: [
    Moves.PARTING_SHOT,
    Moves.BADDY_BAD,
    Moves.STRENGTH_SAP,
    Moves.SPECTRAL_THIEF
  ],
  [Species.GIBLE]: [Moves.DRAGON_DANCE, Moves.BITTER_BLADE, Moves.SHORE_UP, Moves.THOUSAND_ARROWS],
  [Species.MUNCHLAX]: [Moves.CURSE, Moves.BODY_PRESS, Moves.KNOCK_OFF, Moves.SLACK_OFF],
  [Species.RIOLU]: [
    Moves.THUNDEROUS_KICK,
    Moves.BULLET_PUNCH,
    Moves.TRIPLE_AXEL,
    Moves.DOUBLE_IRON_BASH
  ],
  [Species.HIPPOPOTAS]: [Moves.BODY_PRESS, Moves.STONE_AXE, Moves.IRON_DEFENSE, Moves.SALT_CURE],
  [Species.SKORUPI]: [Moves.CEASELESS_EDGE, Moves.DIRE_CLAW, Moves.PARTING_SHOT, Moves.WICKED_BLOW],
  [Species.CROAGUNK]: [
    Moves.DIRE_CLAW,
    Moves.ICE_PUNCH,
    Moves.THUNDEROUS_KICK,
    Moves.VICTORY_DANCE
  ],
  [Species.CARNIVINE]: [Moves.STRENGTH_SAP, Moves.FIRE_LASH, Moves.COIL, Moves.SAPPY_SEED],
  [Species.FINNEON]: [
    Moves.QUIVER_DANCE,
    Moves.BOUNCY_BUBBLE,
    Moves.FREEZE_DRY,
    Moves.ORIGIN_PULSE
  ],
  [Species.MANTYKE]: [Moves.SPLISHY_SPLASH, Moves.HAZE, Moves.NASTY_PLOT, Moves.OBLIVION_WING],
  [Species.SNOVER]: [
    Moves.HIGH_HORSEPOWER,
    Moves.STRENGTH_SAP,
    Moves.AURORA_VEIL,
    Moves.IVY_CUDGEL
  ],
  [Species.ROTOM]: [
    Moves.STRENGTH_SAP,
    Moves.FIERY_DANCE,
    Moves.SPLISHY_SPLASH,
    Moves.ELECTRO_DRIFT
  ],
  [Species.UXIE]: [Moves.COSMIC_POWER, Moves.BODY_PRESS, Moves.RECOVER, Moves.SPARKLY_SWIRL],
  [Species.MESPRIT]: [Moves.TAIL_GLOW, Moves.AURA_SPHERE, Moves.RECOVER, Moves.LUMINA_CRASH],
  [Species.AZELF]: [Moves.PSYSTRIKE, Moves.ICE_BEAM, Moves.MOONBLAST, Moves.TAIL_GLOW],
  [Species.DIALGA]: [Moves.CORE_ENFORCER, Moves.TAKE_HEART, Moves.RECOVER, Moves.MAKE_IT_RAIN],
  [Species.PALKIA]: [Moves.RECOVER, Moves.TAKE_HEART, Moves.WATER_SPOUT, Moves.DRAGON_ENERGY],
  [Species.HEATRAN]: [Moves.TORCH_SONG, Moves.RECOVER, Moves.TACHYON_CUTTER, Moves.MATCHA_GOTCHA],
  [Species.REGIGIGAS]: [Moves.SKILL_SWAP, Moves.RECOVER, Moves.EXTREME_SPEED, Moves.GIGATON_HAMMER],
  [Species.GIRATINA]: [Moves.DRAGON_DANCE, Moves.GLAIVE_RUSH, Moves.RECOVER, Moves.SPECTRAL_THIEF],
  [Species.CRESSELIA]: [
    Moves.COSMIC_POWER,
    Moves.SECRET_SWORD,
    Moves.SIZZLY_SLIDE,
    Moves.LUMINA_CRASH
  ],
  [Species.PHIONE]: [
    Moves.BOUNCY_BUBBLE,
    Moves.FREEZE_DRY,
    Moves.SPLISHY_SPLASH,
    Moves.QUIVER_DANCE
  ],
  [Species.MANAPHY]: [
    Moves.BOUNCY_BUBBLE,
    Moves.FREEZE_DRY,
    Moves.SPLISHY_SPLASH,
    Moves.QUIVER_DANCE
  ],
  [Species.DARKRAI]: [Moves.FIERY_WRATH, Moves.MOONBLAST, Moves.SEARING_SHOT, Moves.SPORE],
  [Species.SHAYMIN]: [Moves.MATCHA_GOTCHA, Moves.FIERY_DANCE, Moves.AEROBLAST, Moves.QUIVER_DANCE],
  [Species.ARCEUS]: [
    Moves.QUIVER_DANCE,
    Moves.COLLISION_COURSE,
    Moves.VICTORY_DANCE,
    Moves.SPECTRAL_THIEF
  ],
  [Species.VICTINI]: [Moves.RECOVER, Moves.BOLT_STRIKE, Moves.PHOTON_GEYSER, Moves.VICTORY_DANCE],
  [Species.SNIVY]: [
    Moves.FLAMETHROWER,
    Moves.CLANGING_SCALES,
    Moves.MAKE_IT_RAIN,
    Moves.FLEUR_CANNON
  ],
  [Species.TEPIG]: [Moves.WAVE_CRASH, Moves.VOLT_TACKLE, Moves.DRAIN_PUNCH, Moves.VICTORY_DANCE],
  [Species.OSHAWOTT]: [
    Moves.TRIPLE_AXEL,
    Moves.SHELL_SIDE_ARM,
    Moves.SACRED_SWORD,
    Moves.SHELL_SMASH
  ],
  [Species.PATRAT]: [Moves.FAKE_OUT, Moves.GLARE, Moves.DYNAMIC_PUNCH, Moves.EXTREME_SPEED],
  [Species.LILLIPUP]: [Moves.CLOSE_COMBAT, Moves.THIEF, Moves.HIGH_HORSEPOWER, Moves.LAST_RESPECTS],
  [Species.PURRLOIN]: [Moves.ENCORE, Moves.ASSIST, Moves.PARTING_SHOT, Moves.WICKED_BLOW],
  [Species.PANSAGE]: [Moves.SWORDS_DANCE, Moves.FIRE_LASH, Moves.EARTHQUAKE, Moves.IVY_CUDGEL],
  [Species.PANSEAR]: [Moves.NASTY_PLOT, Moves.HYDRO_STEAM, Moves.SCORCHING_SANDS, Moves.TORCH_SONG],
  [Species.PANPOUR]: [Moves.NASTY_PLOT, Moves.ENERGY_BALL, Moves.EARTH_POWER, Moves.STEAM_ERUPTION],
  [Species.MUNNA]: [Moves.COSMIC_POWER, Moves.AURA_SPHERE, Moves.EARTH_POWER, Moves.MYSTICAL_POWER],
  [Species.PIDOVE]: [Moves.GUNK_SHOT, Moves.TIDY_UP, Moves.FLOATY_FALL, Moves.TRIPLE_ARROWS],
  [Species.BLITZLE]: [
    Moves.HIGH_HORSEPOWER,
    Moves.THUNDEROUS_KICK,
    Moves.FLARE_BLITZ,
    Moves.VOLT_TACKLE
  ],
  [Species.ROGGENROLA]: [Moves.BODY_PRESS, Moves.CURSE, Moves.SHORE_UP, Moves.DIAMOND_STORM],
  [Species.WOOBAT]: [
    Moves.ESPER_WING,
    Moves.STORED_POWER,
    Moves.MYSTICAL_FIRE,
    Moves.OBLIVION_WING
  ],
  [Species.DRILBUR]: [Moves.IRON_HEAD, Moves.ICE_SPINNER, Moves.SHIFT_GEAR, Moves.THOUSAND_ARROWS],
  [Species.AUDINO]: [Moves.FOLLOW_ME, Moves.MOONBLAST, Moves.WISH, Moves.LUNAR_BLESSING],
  [Species.TIMBURR]: [
    Moves.MACH_PUNCH,
    Moves.DRAIN_PUNCH,
    Moves.ICE_HAMMER,
    Moves.DOUBLE_IRON_BASH
  ],
  [Species.TYMPOLE]: [Moves.JET_PUNCH, Moves.HIGH_HORSEPOWER, Moves.BULK_UP, Moves.SURGING_STRIKES],
  [Species.THROH]: [Moves.DRAIN_PUNCH, Moves.SLACK_OFF, Moves.METEOR_MASH, Moves.NO_RETREAT],
  [Species.SAWK]: [Moves.DRAIN_PUNCH, Moves.MACH_PUNCH, Moves.ENDEAVOR, Moves.VICTORY_DANCE],
  [Species.SEWADDLE]: [Moves.STONE_AXE, Moves.PSYCHO_CUT, Moves.TIDY_UP, Moves.BITTER_BLADE],
  [Species.VENIPEDE]: [
    Moves.SWORDS_DANCE,
    Moves.LEECH_LIFE,
    Moves.NOXIOUS_TORQUE,
    Moves.POWER_TRIP
  ],
  [Species.COTTONEE]: [Moves.POLLEN_PUFF, Moves.PARTING_SHOT, Moves.SLEEP_POWDER, Moves.SEED_FLARE],
  [Species.PETILIL]: [
    Moves.THUNDEROUS_KICK,
    Moves.SPARKLING_ARIA,
    Moves.AQUA_STEP,
    Moves.FIERY_DANCE
  ],
  [Species.BASCULIN]: [
    Moves.LAST_RESPECTS,
    Moves.CLOSE_COMBAT,
    Moves.SPLISHY_SPLASH,
    Moves.NO_RETREAT
  ],
  [Species.SANDILE]: [Moves.DIRE_CLAW, Moves.HIGH_HORSEPOWER, Moves.FIRE_LASH, Moves.WICKED_BLOW],
  [Species.DARUMAKA]: [Moves.DRAIN_PUNCH, Moves.ZING_ZAP, Moves.EARTHQUAKE, Moves.V_CREATE],
  [Species.MARACTUS]: [
    Moves.SCORCHING_SANDS,
    Moves.QUIVER_DANCE,
    Moves.FIERY_DANCE,
    Moves.SEED_FLARE
  ],
  [Species.DWEBBLE]: [Moves.CRABHAMMER, Moves.STONE_AXE, Moves.LEECH_LIFE, Moves.MIGHTY_CLEAVE],
  [Species.SCRAGGY]: [
    Moves.SUCKER_PUNCH,
    Moves.BULLET_PUNCH,
    Moves.DRAGON_DANCE,
    Moves.COLLISION_COURSE
  ],
  [Species.SIGILYPH]: [
    Moves.STORED_POWER,
    Moves.TAKE_HEART,
    Moves.FREEZING_GLARE,
    Moves.OBLIVION_WING
  ],
  [Species.YAMASK]: [
    Moves.STRENGTH_SAP,
    Moves.INFERNAL_PARADE,
    Moves.AURA_SPHERE,
    Moves.ASTRAL_BARRAGE
  ],
  [Species.TIRTOUGA]: [Moves.ICE_SPINNER, Moves.LIQUIDATION, Moves.SHORE_UP, Moves.MIGHTY_CLEAVE],
  [Species.ARCHEN]: [Moves.ROOST, Moves.EARTHQUAKE, Moves.FLOATY_FALL, Moves.MIGHTY_CLEAVE],
  [Species.TRUBBISH]: [Moves.TIDY_UP, Moves.RECOVER, Moves.DIRE_CLAW, Moves.GIGATON_HAMMER],
  [Species.ZORUA]: [Moves.FLAMETHROWER, Moves.MOONBLAST, Moves.AURA_SPHERE, Moves.FIERY_WRATH],
  [Species.MINCCINO]: [Moves.ICICLE_SPEAR, Moves.TIDY_UP, Moves.KNOCK_OFF, Moves.POPULATION_BOMB],
  [Species.GOTHITA]: [Moves.RECOVER, Moves.MOONBLAST, Moves.AURA_SPHERE, Moves.LUMINA_CRASH],
  [Species.SOLOSIS]: [
    Moves.EXPANDING_FORCE,
    Moves.TRICK_ROOM,
    Moves.AURA_SPHERE,
    Moves.LIGHT_OF_RUIN
  ],
  [Species.DUCKLETT]: [
    Moves.SPLISHY_SPLASH,
    Moves.EARTH_POWER,
    Moves.WILDBOLT_STORM,
    Moves.QUIVER_DANCE
  ],
  [Species.VANILLITE]: [Moves.EARTH_POWER, Moves.AURORA_VEIL, Moves.CALM_MIND, Moves.SPARKLY_SWIRL],
  [Species.DEERLING]: [Moves.TIDY_UP, Moves.FLOWER_TRICK, Moves.BODY_SLAM, Moves.COMBAT_TORQUE],
  [Species.EMOLGA]: [Moves.ROOST, Moves.HEAT_WAVE, Moves.TAILWIND, Moves.ZING_ZAP],
  [Species.KARRABLAST]: [
    Moves.LEECH_LIFE,
    Moves.HEAL_ORDER,
    Moves.HIGH_HORSEPOWER,
    Moves.DOUBLE_IRON_BASH
  ],
  [Species.FOONGUS]: [Moves.POLLEN_PUFF, Moves.PARTING_SHOT, Moves.FOUL_PLAY, Moves.SAPPY_SEED],
  [Species.FRILLISH]: [
    Moves.STRENGTH_SAP,
    Moves.INFERNAL_PARADE,
    Moves.FREEZE_DRY,
    Moves.STEAM_ERUPTION
  ],
  [Species.ALOMOMOLA]: [Moves.FLIP_TURN, Moves.HEART_SWAP, Moves.TOXIC, Moves.GLITZY_GLOW],
  [Species.JOLTIK]: [Moves.THUNDER, Moves.PARABOLIC_CHARGE, Moves.EARTH_POWER, Moves.QUIVER_DANCE],
  [Species.FERROSEED]: [Moves.STRENGTH_SAP, Moves.BODY_PRESS, Moves.SPIKY_SHIELD, Moves.SAPPY_SEED],
  [Species.KLINK]: [
    Moves.FLARE_BLITZ,
    Moves.HIGH_HORSEPOWER,
    Moves.FUSION_BOLT,
    Moves.DOUBLE_IRON_BASH
  ],
  [Species.TYNAMO]: [Moves.SCALD, Moves.STRENGTH_SAP, Moves.FIRE_LASH, Moves.PLASMA_FISTS],
  [Species.ELGYEM]: [
    Moves.MYSTICAL_POWER,
    Moves.TRICK_ROOM,
    Moves.STORED_POWER,
    Moves.ASTRAL_BARRAGE
  ],
  [Species.LITWICK]: [Moves.FIERY_DANCE, Moves.EARTH_POWER, Moves.MOONBLAST, Moves.ASTRAL_BARRAGE],
  [Species.AXEW]: [Moves.GLAIVE_RUSH, Moves.DIRE_CLAW, Moves.FIRE_LASH, Moves.VICTORY_DANCE],
  [Species.CUBCHOO]: [
    Moves.TRIPLE_AXEL,
    Moves.LIQUIDATION,
    Moves.SWORDS_DANCE,
    Moves.COLLISION_COURSE
  ],
  [Species.CRYOGONAL]: [Moves.SURF, Moves.AURORA_VEIL, Moves.NASTY_PLOT, Moves.FREEZY_FROST],
  [Species.SHELMET]: [Moves.POWER_GEM, Moves.NASTY_PLOT, Moves.EARTH_POWER, Moves.STEAM_ERUPTION],
  [Species.STUNFISK]: [Moves.SPIKY_SHIELD, Moves.EARTHQUAKE, Moves.STRENGTH_SAP, Moves.THUNDERCLAP],
  [Species.MIENFOO]: [Moves.GUNK_SHOT, Moves.SUPERCELL_SLAM, Moves.KNOCK_OFF, Moves.MOUNTAIN_GALE],
  [Species.DRUDDIGON]: [Moves.FIRE_LASH, Moves.ROOST, Moves.DRAGON_DARTS, Moves.CLANGOROUS_SOUL],
  [Species.GOLETT]: [Moves.SHIFT_GEAR, Moves.DRAIN_PUNCH, Moves.HEADLONG_RUSH, Moves.RAGE_FIST],
  [Species.PAWNIARD]: [
    Moves.SUCKER_PUNCH,
    Moves.CEASELESS_EDGE,
    Moves.BITTER_BLADE,
    Moves.LAST_RESPECTS
  ],
  [Species.BOUFFALANT]: [Moves.SLACK_OFF, Moves.JUMP_KICK, Moves.HEAD_SMASH, Moves.FLARE_BLITZ],
  [Species.RUFFLET]: [Moves.FLOATY_FALL, Moves.MOONBLAST, Moves.HEAT_WAVE, Moves.BOLT_BEAK],
  [Species.VULLABY]: [Moves.TOXIC, Moves.BODY_PRESS, Moves.ROOST, Moves.TOPSY_TURVY],
  [Species.HEATMOR]: [Moves.EARTH_POWER, Moves.OVERHEAT, Moves.THUNDERBOLT, Moves.V_CREATE],
  [Species.DURANT]: [
    Moves.HIGH_HORSEPOWER,
    Moves.FIRST_IMPRESSION,
    Moves.SWORDS_DANCE,
    Moves.BEHEMOTH_BASH
  ],
  [Species.DEINO]: [Moves.FIERY_WRATH, Moves.ESPER_WING, Moves.SLUDGE_WAVE, Moves.FICKLE_BEAM],
  [Species.LARVESTA]: [Moves.THUNDERBOLT, Moves.MATCHA_GOTCHA, Moves.EARTH_POWER, Moves.TORCH_SONG],
  [Species.COBALION]: [
    Moves.BEHEMOTH_BLADE,
    Moves.BODY_PRESS,
    Moves.CEASELESS_EDGE,
    Moves.VICTORY_DANCE
  ],
  [Species.TERRAKION]: [
    Moves.MIGHTY_CLEAVE,
    Moves.HEADLONG_RUSH,
    Moves.CEASELESS_EDGE,
    Moves.VICTORY_DANCE
  ],
  [Species.VIRIZION]: [Moves.PSYBLADE, Moves.SAPPY_SEED, Moves.CEASELESS_EDGE, Moves.VICTORY_DANCE],
  [Species.TORNADUS]: [Moves.EARTH_POWER, Moves.U_TURN, Moves.ICE_BEAM, Moves.OBLIVION_WING],
  [Species.THUNDURUS]: [Moves.EARTH_POWER, Moves.HURRICANE, Moves.THUNDERCLAP, Moves.ELECTRO_SHOT],
  [Species.RESHIRAM]: [Moves.ROOST, Moves.TAKE_HEART, Moves.ERUPTION, Moves.DRAGON_ENERGY],
  [Species.ZEKROM]: [
    Moves.DRAGON_DANCE,
    Moves.THUNDEROUS_KICK,
    Moves.DRAGON_HAMMER,
    Moves.BOLT_BEAK
  ],
  [Species.LANDORUS]: [Moves.STONE_AXE, Moves.THOUSAND_ARROWS, Moves.ROOST, Moves.FLOATY_FALL],
  [Species.KYUREM]: [
    Moves.DRAGON_DARTS,
    Moves.DRAGON_ENERGY,
    Moves.NO_RETREAT,
    Moves.GLACIAL_LANCE
  ],
  [Species.KELDEO]: [
    Moves.BOUNCY_BUBBLE,
    Moves.THUNDERBOLT,
    Moves.FREEZE_DRY,
    Moves.STEAM_ERUPTION
  ],
  [Species.MELOETTA]: [Moves.TORCH_SONG, Moves.QUIVER_DANCE, Moves.TRIPLE_ARROWS, Moves.BOOMBURST],
  [Species.GENESECT]: [Moves.EXTREME_SPEED, Moves.U_TURN, Moves.TACHYON_CUTTER, Moves.TAIL_GLOW],
  [Species.CHESPIN]: [Moves.DRAIN_PUNCH, Moves.SYNTHESIS, Moves.CEASELESS_EDGE, Moves.SAPPY_SEED],
  [Species.FENNEKIN]: [Moves.EXPANDING_FORCE, Moves.MOONBLAST, Moves.THUNDERBOLT, Moves.TORCH_SONG],
  [Species.FROAKIE]: [Moves.MOONBLAST, Moves.SHELL_SIDE_ARM, Moves.FIERY_WRATH, Moves.WATER_SPOUT],
  [Species.BUNNELBY]: [Moves.DRAIN_PUNCH, Moves.TIDY_UP, Moves.FACADE, Moves.EXTREME_SPEED],
  [Species.FLETCHLING]: [Moves.DRILL_RUN, Moves.U_TURN, Moves.HEAD_SMASH, Moves.VOLT_TACKLE],
  [Species.SCATTERBUG]: [Moves.MOONBLAST, Moves.POLLEN_PUFF, Moves.TAILWIND, Moves.HEAT_WAVE],
  [Species.LITLEO]: [Moves.EARTH_POWER, Moves.NASTY_PLOT, Moves.YAWN, Moves.TORCH_SONG],
  [Species.FLABEBE]: [
    Moves.GLITZY_GLOW,
    Moves.MYSTICAL_FIRE,
    Moves.JUNGLE_HEALING,
    Moves.QUIVER_DANCE
  ],
  [Species.SKIDDO]: [Moves.HIGH_HORSEPOWER, Moves.GRASSY_GLIDE, Moves.STONE_AXE, Moves.SAPPY_SEED],
  [Species.PANCHAM]: [Moves.DRAIN_PUNCH, Moves.FAKE_OUT, Moves.BULLET_PUNCH, Moves.WICKED_BLOW],
  [Species.FURFROU]: [Moves.TIDY_UP, Moves.SLACK_OFF, Moves.COVET, Moves.MULTI_ATTACK],
  [Species.ESPURR]: [Moves.GLARE, Moves.MOONBLAST, Moves.AURA_SPHERE, Moves.PSYSTRIKE],
  [Species.HONEDGE]: [
    Moves.TACHYON_CUTTER,
    Moves.POLTERGEIST,
    Moves.BITTER_BLADE,
    Moves.BEHEMOTH_BLADE
  ],
  [Species.SPRITZEE]: [Moves.TRICK_ROOM, Moves.FOUL_PLAY, Moves.WISH, Moves.REVIVAL_BLESSING],
  [Species.SWIRLIX]: [
    Moves.BELLY_DRUM,
    Moves.SUCKER_PUNCH,
    Moves.MAGICAL_TORQUE,
    Moves.REVIVAL_BLESSING
  ],
  [Species.INKAY]: [Moves.POWER_TRIP, Moves.SPIN_OUT, Moves.RECOVER, Moves.PSYCHO_BOOST],
  [Species.BINACLE]: [Moves.TRIPLE_AXEL, Moves.ACCELEROCK, Moves.DIRE_CLAW, Moves.MIGHTY_CLEAVE],
  [Species.SKRELP]: [Moves.RECOVER, Moves.CORE_ENFORCER, Moves.CALM_MIND, Moves.MALIGNANT_CHAIN],
  [Species.CLAUNCHER]: [
    Moves.SHELL_SMASH,
    Moves.ARMOR_CANNON,
    Moves.WATER_SHURIKEN,
    Moves.ORIGIN_PULSE
  ],
  [Species.HELIOPTILE]: [Moves.WEATHER_BALL, Moves.HYDRO_STEAM, Moves.EARTH_POWER, Moves.BOOMBURST],
  [Species.TYRUNT]: [Moves.DRAGON_HAMMER, Moves.FLARE_BLITZ, Moves.VOLT_TACKLE, Moves.AXE_KICK],
  [Species.AMAURA]: [Moves.RECOVER, Moves.AURORA_VEIL, Moves.POWER_GEM, Moves.GEOMANCY],
  [Species.HAWLUCHA]: [
    Moves.TRIPLE_AXEL,
    Moves.HIGH_HORSEPOWER,
    Moves.FLOATY_FALL,
    Moves.WICKED_BLOW
  ],
  [Species.DEDENNE]: [Moves.BOOMBURST, Moves.FAKE_OUT, Moves.NASTY_PLOT, Moves.REVIVAL_BLESSING],
  [Species.CARBINK]: [Moves.BODY_PRESS, Moves.SHORE_UP, Moves.SPARKLY_SWIRL, Moves.DIAMOND_STORM],
  [Species.GOOMY]: [Moves.SCALD, Moves.RECOVER, Moves.CALM_MIND, Moves.MAKE_IT_RAIN],
  [Species.KLEFKI]: [Moves.HEAL_BLOCK, Moves.ENCORE, Moves.TOPSY_TURVY, Moves.INSTRUCT],
  [Species.PHANTUMP]: [Moves.SPIRIT_SHACKLE, Moves.TRICK_ROOM, Moves.SYNTHESIS, Moves.SAPPY_SEED],
  [Species.PUMPKABOO]: [Moves.SPIRIT_SHACKLE, Moves.FIRE_LASH, Moves.DIRE_CLAW, Moves.SAPPY_SEED],
  [Species.BERGMITE]: [Moves.STONE_AXE, Moves.METAL_BURST, Moves.BODY_PRESS, Moves.GLACIAL_LANCE],
  [Species.NOIBAT]: [Moves.AEROBLAST, Moves.OVERDRIVE, Moves.NASTY_PLOT, Moves.CLANGING_SCALES],
  [Species.XERNEAS]: [Moves.SEARING_SHOT, Moves.LUMINA_CRASH, Moves.STRENGTH_SAP, Moves.TAIL_GLOW],
  [Species.YVELTAL]: [
    Moves.SLUDGE_WAVE,
    Moves.POWER_TRIP,
    Moves.FIERY_WRATH,
    Moves.CLANGOROUS_SOUL
  ],
  [Species.ZYGARDE]: [
    Moves.DRAGON_DARTS,
    Moves.HEAL_ORDER,
    Moves.VICTORY_DANCE,
    Moves.DOUBLE_IRON_BASH
  ],
  [Species.DIANCIE]: [Moves.MAGICAL_TORQUE, Moves.BODY_PRESS, Moves.SHORE_UP, Moves.GEOMANCY],
  [Species.HOOPA]: [Moves.PHOTON_GEYSER, Moves.SECRET_SWORD, Moves.FIERY_WRATH, Moves.SHELL_SMASH],
  [Species.VOLCANION]: [Moves.HYDRO_STEAM, Moves.CALM_MIND, Moves.ENERGY_BALL, Moves.MAGMA_STORM],
  [Species.ROWLET]: [
    Moves.THOUSAND_ARROWS,
    Moves.POLTERGEIST,
    Moves.FIRST_IMPRESSION,
    Moves.VICTORY_DANCE
  ],
  [Species.LITTEN]: [Moves.FAKE_OUT, Moves.PARTING_SHOT, Moves.MORNING_SUN, Moves.SACRED_FIRE],
  [Species.POPPLIO]: [
    Moves.PSYCHIC_NOISE,
    Moves.BOUNCY_BUBBLE,
    Moves.ALLURING_VOICE,
    Moves.TORCH_SONG
  ],
  [Species.PIKIPEK]: [
    Moves.DUAL_WINGBEAT,
    Moves.BONE_RUSH,
    Moves.BURNING_BULWARK,
    Moves.POPULATION_BOMB
  ],
  [Species.YUNGOOS]: [Moves.EXTREME_SPEED, Moves.KNOCK_OFF, Moves.TIDY_UP, Moves.MULTI_ATTACK],
  [Species.GRUBBIN]: [Moves.ICE_BEAM, Moves.EARTH_POWER, Moves.THUNDERCLAP, Moves.QUIVER_DANCE],
  [Species.CRABRAWLER]: [
    Moves.JET_PUNCH,
    Moves.SHORE_UP,
    Moves.SUCKER_PUNCH,
    Moves.SURGING_STRIKES
  ],
  [Species.ORICORIO]: [
    Moves.QUIVER_DANCE,
    Moves.FIERY_DANCE,
    Moves.THUNDERCLAP,
    Moves.OBLIVION_WING
  ],
  [Species.CUTIEFLY]: [Moves.STICKY_WEB, Moves.MOONBLAST, Moves.HEAT_WAVE, Moves.SPORE],
  [Species.ROCKRUFF]: [
    Moves.HIGH_HORSEPOWER,
    Moves.TIDY_UP,
    Moves.ICE_SPINNER,
    Moves.MIGHTY_CLEAVE
  ],
  [Species.WISHIWASHI]: [Moves.HEAL_ORDER, Moves.ICE_SPINNER, Moves.DRAGON_DANCE, Moves.JET_PUNCH],
  [Species.MAREANIE]: [
    Moves.CEASELESS_EDGE,
    Moves.SIZZLY_SLIDE,
    Moves.BODY_PRESS,
    Moves.LEECH_SEED
  ],
  [Species.MUDBRAY]: [Moves.BODY_PRESS, Moves.YAWN, Moves.SHORE_UP, Moves.THOUSAND_WAVES],
  [Species.DEWPIDER]: [Moves.JET_PUNCH, Moves.SILK_TRAP, Moves.SWORDS_DANCE, Moves.AQUA_STEP],
  [Species.FOMANTIS]: [Moves.SUPERPOWER, Moves.HEADLONG_RUSH, Moves.ICE_HAMMER, Moves.BITTER_BLADE],
  [Species.MORELULL]: [Moves.CALM_MIND, Moves.SAPPY_SEED, Moves.DRAINING_KISS, Moves.MATCHA_GOTCHA],
  [Species.SALANDIT]: [Moves.FAKE_OUT, Moves.SLUDGE_WAVE, Moves.CORE_ENFORCER, Moves.ERUPTION],
  [Species.STUFFUL]: [Moves.DRAIN_PUNCH, Moves.METEOR_MASH, Moves.ICE_HAMMER, Moves.RAGE_FIST],
  [Species.BOUNSWEET]: [
    Moves.TRIPLE_AXEL,
    Moves.AQUA_STEP,
    Moves.THUNDEROUS_KICK,
    Moves.SAPPY_SEED
  ],
  [Species.COMFEY]: [
    Moves.REVIVAL_BLESSING,
    Moves.POLLEN_PUFF,
    Moves.STRENGTH_SAP,
    Moves.MATCHA_GOTCHA
  ],
  [Species.ORANGURU]: [Moves.JUNGLE_HEALING, Moves.YAWN, Moves.FOLLOW_ME, Moves.LUMINA_CRASH],
  [Species.PASSIMIAN]: [Moves.FAKE_OUT, Moves.SUCKER_PUNCH, Moves.SWORDS_DANCE, Moves.PYRO_BALL],
  [Species.WIMPOD]: [Moves.TRIPLE_AXEL, Moves.OBSTRUCT, Moves.JET_PUNCH, Moves.SURGING_STRIKES],
  [Species.SANDYGAST]: [Moves.SCORCHING_SANDS, Moves.SPLISHY_SPLASH, Moves.CURSE, Moves.SALT_CURE],
  [Species.PYUKUMUKU]: [
    Moves.COMEUPPANCE,
    Moves.BANEFUL_BUNKER,
    Moves.TOXIC_SPIKES,
    Moves.SALT_CURE
  ],
  [Species.TYPE_NULL]: [Moves.DIRE_CLAW, Moves.RECOVER, Moves.EXTREME_SPEED, Moves.NO_RETREAT],
  [Species.MINIOR]: [Moves.EARTH_POWER, Moves.FLOATY_FALL, Moves.ZING_ZAP, Moves.DIAMOND_STORM],
  [Species.KOMALA]: [Moves.SLACK_OFF, Moves.EXTREME_SPEED, Moves.KNOCK_OFF, Moves.COLLISION_COURSE],
  [Species.TURTONATOR]: [
    Moves.BURNING_BULWARK,
    Moves.MORNING_SUN,
    Moves.BODY_PRESS,
    Moves.CORE_ENFORCER
  ],
  [Species.TOGEDEMARU]: [Moves.FAKE_OUT, Moves.METAL_BURST, Moves.METEOR_MASH, Moves.BOLT_STRIKE],
  [Species.MIMIKYU]: [
    Moves.MAGICAL_TORQUE,
    Moves.TIDY_UP,
    Moves.SIZZLY_SLIDE,
    Moves.SPECTRAL_THIEF
  ],
  [Species.BRUXISH]: [Moves.ICE_FANG, Moves.FIRE_FANG, Moves.FLIP_TURN, Moves.FILLET_AWAY],
  [Species.DRAMPA]: [
    Moves.SLACK_OFF,
    Moves.FLAMETHROWER,
    Moves.CORE_ENFORCER,
    Moves.CLANGOROUS_SOUL
  ],
  [Species.DHELMISE]: [Moves.POLTERGEIST, Moves.STRENGTH_SAP, Moves.LIQUIDATION, Moves.SAPPY_SEED],
  [Species.JANGMO_O]: [
    Moves.OVERDRIVE,
    Moves.SHELL_SIDE_ARM,
    Moves.SECRET_SWORD,
    Moves.GLAIVE_RUSH
  ],
  [Species.TAPU_KOKO]: [
    Moves.MAGICAL_TORQUE,
    Moves.TRIPLE_AXEL,
    Moves.RISING_VOLTAGE,
    Moves.PLASMA_FISTS
  ],
  [Species.TAPU_LELE]: [Moves.MOONLIGHT, Moves.NASTY_PLOT, Moves.HEAT_WAVE, Moves.EXPANDING_FORCE],
  [Species.TAPU_BULU]: [
    Moves.SAPPY_SEED,
    Moves.DRAIN_PUNCH,
    Moves.MAGICAL_TORQUE,
    Moves.VICTORY_DANCE
  ],
  [Species.TAPU_FINI]: [Moves.AURA_SPHERE, Moves.EARTH_POWER, Moves.RECOVER, Moves.QUIVER_DANCE],
  [Species.COSMOG]: [
    Moves.VICTORY_DANCE,
    Moves.QUIVER_DANCE,
    Moves.SACRED_FIRE,
    Moves.PHOTON_GEYSER
  ],
  [Species.NIHILEGO]: [
    Moves.STRENGTH_SAP,
    Moves.QUIVER_DANCE,
    Moves.ENERGY_BALL,
    Moves.MALIGNANT_CHAIN
  ],
  [Species.BUZZWOLE]: [
    Moves.LEECH_LIFE,
    Moves.BULLET_PUNCH,
    Moves.DARKEST_LARIAT,
    Moves.COLLISION_COURSE
  ],
  [Species.PHEROMOSA]: [
    Moves.AURA_SPHERE,
    Moves.MAKE_IT_RAIN,
    Moves.ATTACK_ORDER,
    Moves.COLLISION_COURSE
  ],
  [Species.XURKITREE]: [Moves.OVERHEAT, Moves.GIGA_DRAIN, Moves.TAIL_GLOW, Moves.THUNDERCLAP],
  [Species.CELESTEELA]: [Moves.RECOVER, Moves.BUZZY_BUZZ, Moves.EARTH_POWER, Moves.OBLIVION_WING],
  [Species.KARTANA]: [
    Moves.MIGHTY_CLEAVE,
    Moves.CEASELESS_EDGE,
    Moves.BITTER_BLADE,
    Moves.BEHEMOTH_BLADE
  ],
  [Species.GUZZLORD]: [Moves.SUCKER_PUNCH, Moves.COMEUPPANCE, Moves.SLACK_OFF, Moves.RUINATION],
  [Species.NECROZMA]: [
    Moves.COSMIC_POWER,
    Moves.SACRED_FIRE,
    Moves.ASTRAL_BARRAGE,
    Moves.CLANGOROUS_SOUL
  ],
  [Species.MAGEARNA]: [
    Moves.STRENGTH_SAP,
    Moves.EARTH_POWER,
    Moves.COSMIC_POWER,
    Moves.MAKE_IT_RAIN
  ],
  [Species.MARSHADOW]: [
    Moves.POWER_UP_PUNCH,
    Moves.TRIPLE_AXEL,
    Moves.STORM_THROW,
    Moves.DOUBLE_IRON_BASH
  ],
  [Species.POIPOLE]: [Moves.SLUDGE_BOMB, Moves.BUG_BUZZ, Moves.SEARING_SHOT, Moves.DRAGON_ENERGY],
  [Species.STAKATAKA]: [Moves.HEAVY_SLAM, Moves.SHORE_UP, Moves.CURSE, Moves.SALT_CURE],
  [Species.BLACEPHALON]: [
    Moves.NASTY_PLOT,
    Moves.AURA_SPHERE,
    Moves.CHLOROBLAST,
    Moves.ASTRAL_BARRAGE
  ],
  [Species.ZERAORA]: [Moves.SWORDS_DANCE, Moves.TRIPLE_AXEL, Moves.BOLT_STRIKE, Moves.PYRO_BALL],
  [Species.MELTAN]: [Moves.BULLET_PUNCH, Moves.DRAIN_PUNCH, Moves.BULK_UP, Moves.PLASMA_FISTS],
  [Species.GROOKEY]: [
    Moves.HIGH_HORSEPOWER,
    Moves.CLANGOROUS_SOUL,
    Moves.GRASSY_GLIDE,
    Moves.SAPPY_SEED
  ],
  [Species.SCORBUNNY]: [
    Moves.EXTREME_SPEED,
    Moves.HIGH_JUMP_KICK,
    Moves.TRIPLE_AXEL,
    Moves.BOLT_STRIKE
  ],
  [Species.SOBBLE]: [Moves.AEROBLAST, Moves.FROST_BREATH, Moves.SEARING_SHOT, Moves.STEAM_ERUPTION],
  [Species.SKWOVET]: [Moves.KNOCK_OFF, Moves.SLACK_OFF, Moves.BODY_PRESS, Moves.POPULATION_BOMB],
  [Species.ROOKIDEE]: [Moves.ROOST, Moves.BODY_PRESS, Moves.IRON_HEAD, Moves.KINGS_SHIELD],
  [Species.BLIPBUG]: [Moves.HEAL_ORDER, Moves.EXPANDING_FORCE, Moves.SPORE, Moves.TAIL_GLOW],
  [Species.NICKIT]: [
    Moves.BADDY_BAD,
    Moves.BURNING_JEALOUSY,
    Moves.SPARKLY_SWIRL,
    Moves.FIERY_WRATH
  ],
  [Species.GOSSIFLEUR]: [Moves.TAILWIND, Moves.STRENGTH_SAP, Moves.PARTING_SHOT, Moves.SEED_FLARE],
  [Species.WOOLOO]: [Moves.PSYSHIELD_BASH, Moves.MILK_DRINK, Moves.BODY_PRESS, Moves.MULTI_ATTACK],
  [Species.CHEWTLE]: [Moves.FIRE_FANG, Moves.ACCELEROCK, Moves.SHELL_SMASH, Moves.FISHIOUS_REND],
  [Species.YAMPER]: [Moves.ICE_FANG, Moves.SWORDS_DANCE, Moves.THUNDER_FANG, Moves.ZIPPY_ZAP],
  [Species.ROLYCOLY]: [Moves.BITTER_BLADE, Moves.BODY_PRESS, Moves.BULK_UP, Moves.DIAMOND_STORM],
  [Species.APPLIN]: [
    Moves.DRAGON_CHEER,
    Moves.DRAGON_HAMMER,
    Moves.FLOWER_TRICK,
    Moves.STRENGTH_SAP
  ],
  [Species.SILICOBRA]: [Moves.SHORE_UP, Moves.SHED_TAIL, Moves.STONE_EDGE, Moves.PRECIPICE_BLADES],
  [Species.CRAMORANT]: [Moves.APPLE_ACID, Moves.SURF, Moves.SCORCHING_SANDS, Moves.OBLIVION_WING],
  [Species.ARROKUDA]: [Moves.SUPERCELL_SLAM, Moves.KNOCK_OFF, Moves.ICE_SPINNER, Moves.FILLET_AWAY],
  [Species.TOXEL]: [Moves.NASTY_PLOT, Moves.BUG_BUZZ, Moves.SPARKLING_ARIA, Moves.TORCH_SONG],
  [Species.SIZZLIPEDE]: [
    Moves.BURNING_BULWARK,
    Moves.ZING_ZAP,
    Moves.FIRST_IMPRESSION,
    Moves.VICTORY_DANCE
  ],
  [Species.CLOBBOPUS]: [
    Moves.STORM_THROW,
    Moves.JET_PUNCH,
    Moves.MACH_PUNCH,
    Moves.SURGING_STRIKES
  ],
  [Species.SINISTEA]: [Moves.SCALD, Moves.TAKE_HEART, Moves.SPARKLY_SWIRL, Moves.MATCHA_GOTCHA],
  [Species.HATENNA]: [Moves.RECOVER, Moves.MOONBLAST, Moves.BUZZY_BUZZ, Moves.SEARING_SHOT],
  [Species.IMPIDIMP]: [Moves.ENCORE, Moves.PARTING_SHOT, Moves.TOPSY_TURVY, Moves.WICKED_BLOW],
  [Species.MILCERY]: [Moves.MOONBLAST, Moves.SYRUP_BOMB, Moves.EARTH_POWER, Moves.SEARING_SHOT],
  [Species.FALINKS]: [
    Moves.COMBAT_TORQUE,
    Moves.PSYSHIELD_BASH,
    Moves.HEAL_ORDER,
    Moves.POPULATION_BOMB
  ],
  [Species.PINCURCHIN]: [
    Moves.TRICK_ROOM,
    Moves.RISING_VOLTAGE,
    Moves.STRENGTH_SAP,
    Moves.THUNDERCLAP
  ],
  [Species.SNOM]: [Moves.MOONBLAST, Moves.SURF, Moves.EARTH_POWER, Moves.FIERY_DANCE],
  [Species.STONJOURNER]: [
    Moves.BODY_PRESS,
    Moves.HELPING_HAND,
    Moves.ACCELEROCK,
    Moves.DIAMOND_STORM
  ],
  [Species.EISCUE]: [Moves.TRIPLE_AXEL, Moves.AQUA_STEP, Moves.SHELL_SMASH, Moves.GLACIAL_LANCE],
  [Species.INDEEDEE]: [
    Moves.MATCHA_GOTCHA,
    Moves.EXPANDING_FORCE,
    Moves.MOONBLAST,
    Moves.REVIVAL_BLESSING
  ],
  [Species.MORPEKO]: [
    Moves.TRIPLE_AXEL,
    Moves.OBSTRUCT,
    Moves.SWORDS_DANCE,
    Moves.COLLISION_COURSE
  ],
  [Species.CUFANT]: [Moves.LIQUIDATION, Moves.CURSE, Moves.COMBAT_TORQUE, Moves.GIGATON_HAMMER],
  [Species.DRACOZOLT]: [
    Moves.TRIPLE_AXEL,
    Moves.DRAGON_HAMMER,
    Moves.FIRE_LASH,
    Moves.DRAGON_DANCE
  ],
  [Species.ARCTOZOLT]: [
    Moves.TRIPLE_AXEL,
    Moves.LIQUIDATION,
    Moves.HIGH_HORSEPOWER,
    Moves.SHIFT_GEAR
  ],
  [Species.DRACOVISH]: [
    Moves.TRIPLE_AXEL,
    Moves.DRAGON_HAMMER,
    Moves.THUNDER_FANG,
    Moves.DRAGON_DANCE
  ],
  [Species.ARCTOVISH]: [
    Moves.TRIPLE_AXEL,
    Moves.SUPERCELL_SLAM,
    Moves.HIGH_HORSEPOWER,
    Moves.SHIFT_GEAR
  ],
  [Species.DURALUDON]: [Moves.ICE_BEAM, Moves.BODY_PRESS, Moves.RECOVER, Moves.CORE_ENFORCER],
  [Species.DREEPY]: [
    Moves.DRAGON_ENERGY,
    Moves.POWER_UP_PUNCH,
    Moves.BLAZING_TORQUE,
    Moves.SPECTRAL_THIEF
  ],
  [Species.ZACIAN]: [
    Moves.MAGICAL_TORQUE,
    Moves.MIGHTY_CLEAVE,
    Moves.CEASELESS_EDGE,
    Moves.BITTER_BLADE
  ],
  [Species.ZAMAZENTA]: [
    Moves.PSYSHIELD_BASH,
    Moves.BODY_PRESS,
    Moves.SLACK_OFF,
    Moves.VICTORY_DANCE
  ],
  [Species.ETERNATUS]: [
    Moves.BODY_PRESS,
    Moves.DRAGON_ENERGY,
    Moves.MALIGNANT_CHAIN,
    Moves.TAIL_GLOW
  ],
  [Species.KUBFU]: [Moves.METEOR_MASH, Moves.DRAIN_PUNCH, Moves.JET_PUNCH, Moves.DRAGON_DANCE],
  [Species.ZARUDE]: [Moves.SAPPY_SEED, Moves.PARTING_SHOT, Moves.WICKED_BLOW, Moves.VICTORY_DANCE],
  [Species.REGIELEKI]: [Moves.NASTY_PLOT, Moves.ICE_BEAM, Moves.EARTH_POWER, Moves.ELECTRO_DRIFT],
  [Species.REGIDRAGO]: [
    Moves.METEOR_MASH,
    Moves.FLAMETHROWER,
    Moves.TAKE_HEART,
    Moves.DRAGON_DARTS
  ],
  [Species.GLASTRIER]: [
    Moves.TRICK_ROOM,
    Moves.SLACK_OFF,
    Moves.HIGH_HORSEPOWER,
    Moves.GLACIAL_LANCE
  ],
  [Species.SPECTRIER]: [
    Moves.EARTH_POWER,
    Moves.PARTING_SHOT,
    Moves.AURA_SPHERE,
    Moves.ASTRAL_BARRAGE
  ],
  [Species.CALYREX]: [Moves.SAPPY_SEED, Moves.RECOVER, Moves.SECRET_SWORD, Moves.PHOTON_GEYSER],
  [Species.ENAMORUS]: [
    Moves.FLEUR_CANNON,
    Moves.TAKE_HEART,
    Moves.STORED_POWER,
    Moves.OBLIVION_WING
  ],
  [Species.SPRIGATITO]: [Moves.FIRE_LASH, Moves.TRIPLE_AXEL, Moves.SUCKER_PUNCH, Moves.WICKED_BLOW],
  [Species.FUECOCO]: [Moves.ALLURING_VOICE, Moves.SLACK_OFF, Moves.OVERDRIVE, Moves.MOONGEIST_BEAM],
  [Species.QUAXLY]: [Moves.DRAGON_DANCE, Moves.TRIPLE_AXEL, Moves.TROP_KICK, Moves.THUNDEROUS_KICK],
  [Species.LECHONK]: [
    Moves.MILK_DRINK,
    Moves.BLAZING_TORQUE,
    Moves.FILLET_AWAY,
    Moves.MULTI_ATTACK
  ],
  [Species.TAROUNTULA]: [Moves.STONE_AXE, Moves.LEECH_LIFE, Moves.THIEF, Moves.SPORE],
  [Species.NYMBLE]: [Moves.KNOCK_OFF, Moves.FELL_STINGER, Moves.ATTACK_ORDER, Moves.WICKED_BLOW],
  [Species.PAWMI]: [Moves.DRAIN_PUNCH, Moves.ICE_PUNCH, Moves.MACH_PUNCH, Moves.PLASMA_FISTS],
  [Species.TANDEMAUS]: [Moves.BATON_PASS, Moves.THIEF, Moves.SIZZLY_SLIDE, Moves.REVIVAL_BLESSING],
  [Species.FIDOUGH]: [Moves.WISH, Moves.BODY_PRESS, Moves.SIZZLY_SLIDE, Moves.TIDY_UP],
  [Species.SMOLIV]: [Moves.STRENGTH_SAP, Moves.EARTH_POWER, Moves.CALM_MIND, Moves.BOOMBURST],
  [Species.SQUAWKABILLY]: [
    Moves.PARTING_SHOT,
    Moves.EARTHQUAKE,
    Moves.FLARE_BLITZ,
    Moves.EXTREME_SPEED
  ],
  [Species.NACLI]: [Moves.BODY_PRESS, Moves.TOXIC, Moves.CURSE, Moves.DIAMOND_STORM],
  [Species.CHARCADET]: [
    Moves.SACRED_SWORD,
    Moves.PHOTON_GEYSER,
    Moves.MOONBLAST,
    Moves.SPECTRAL_THIEF
  ],
  [Species.TADBULB]: [Moves.PARABOLIC_CHARGE, Moves.SCALD, Moves.EARTH_POWER, Moves.ELECTRO_SHOT],
  [Species.WATTREL]: [Moves.NASTY_PLOT, Moves.TAILWIND, Moves.HEAT_WAVE, Moves.ELECTRO_SHOT],
  [Species.MASCHIFF]: [
    Moves.PARTING_SHOT,
    Moves.CLOSE_COMBAT,
    Moves.PSYCHIC_FANGS,
    Moves.NO_RETREAT
  ],
  [Species.SHROODLE]: [Moves.GASTRO_ACID, Moves.PARTING_SHOT, Moves.TOXIC, Moves.SKETCH],
  [Species.BRAMBLIN]: [Moves.TAILWIND, Moves.STRENGTH_SAP, Moves.FLOWER_TRICK, Moves.LAST_RESPECTS],
  [Species.TOEDSCOOL]: [
    Moves.STRENGTH_SAP,
    Moves.TOPSY_TURVY,
    Moves.PARTING_SHOT,
    Moves.SAPPY_SEED
  ],
  [Species.KLAWF]: [Moves.CRABHAMMER, Moves.SHORE_UP, Moves.MIGHTY_CLEAVE, Moves.SHELL_SMASH],
  [Species.CAPSAKID]: [Moves.STRENGTH_SAP, Moves.APPLE_ACID, Moves.FROST_BREATH, Moves.TORCH_SONG],
  [Species.RELLOR]: [Moves.HEAL_BLOCK, Moves.RECOVER, Moves.HEAT_WAVE, Moves.LUMINA_CRASH],
  [Species.FLITTLE]: [Moves.COSMIC_POWER, Moves.AURA_SPHERE, Moves.ROOST, Moves.FIERY_DANCE],
  [Species.TINKATINK]: [Moves.MAGICAL_TORQUE, Moves.PYRO_BALL, Moves.ICE_HAMMER, Moves.SHIFT_GEAR],
  [Species.WIGLETT]: [
    Moves.SHELL_SMASH,
    Moves.ICICLE_CRASH,
    Moves.SEED_BOMB,
    Moves.SURGING_STRIKES
  ],
  [Species.BOMBIRDIER]: [
    Moves.FLOATY_FALL,
    Moves.SWORDS_DANCE,
    Moves.SUCKER_PUNCH,
    Moves.MIGHTY_CLEAVE
  ],
  [Species.FINIZEN]: [
    Moves.TRIPLE_AXEL,
    Moves.DRAIN_PUNCH,
    Moves.HEADLONG_RUSH,
    Moves.SURGING_STRIKES
  ],
  [Species.VAROOM]: [Moves.COMBAT_TORQUE, Moves.U_TURN, Moves.BLAZING_TORQUE, Moves.NOXIOUS_TORQUE],
  [Species.CYCLIZAR]: [
    Moves.BATON_PASS,
    Moves.BLAZING_TORQUE,
    Moves.KNOCK_OFF,
    Moves.CLANGOROUS_SOUL
  ],
  [Species.ORTHWORM]: [Moves.SIZZLY_SLIDE, Moves.COIL, Moves.BODY_PRESS, Moves.SHORE_UP],
  [Species.GLIMMET]: [Moves.CALM_MIND, Moves.EARTH_POWER, Moves.FIERY_DANCE, Moves.MALIGNANT_CHAIN],
  [Species.GREAVARD]: [Moves.SHADOW_BONE, Moves.YAWN, Moves.SHORE_UP, Moves.COLLISION_COURSE],
  [Species.FLAMIGO]: [
    Moves.THUNDEROUS_KICK,
    Moves.TRIPLE_AXEL,
    Moves.FLOATY_FALL,
    Moves.VICTORY_DANCE
  ],
  [Species.CETODDLE]: [Moves.TRIPLE_AXEL, Moves.HIGH_HORSEPOWER, Moves.RECOVER, Moves.DRAGON_DANCE],
  [Species.VELUZA]: [Moves.CEASELESS_EDGE, Moves.FLIP_TURN, Moves.ICE_SPINNER, Moves.PSYBLADE],
  [Species.DONDOZO]: [Moves.SOFT_BOILED, Moves.ICE_SPINNER, Moves.TOXIC, Moves.SALT_CURE],
  [Species.TATSUGIRI]: [
    Moves.ICE_BEAM,
    Moves.FILLET_AWAY,
    Moves.CORE_ENFORCER,
    Moves.STEAM_ERUPTION
  ],
  [Species.GREAT_TUSK]: [
    Moves.STONE_AXE,
    Moves.MORNING_SUN,
    Moves.DRAGON_DANCE,
    Moves.COLLISION_COURSE
  ],
  [Species.SCREAM_TAIL]: [
    Moves.TORCH_SONG,
    Moves.GLITZY_GLOW,
    Moves.MOONLIGHT,
    Moves.SPARKLY_SWIRL
  ],
  [Species.BRUTE_BONNET]: [
    Moves.DARKEST_LARIAT,
    Moves.STRENGTH_SAP,
    Moves.EARTHQUAKE,
    Moves.SAPPY_SEED
  ],
  [Species.FLUTTER_MANE]: [
    Moves.MOONLIGHT,
    Moves.FLAMETHROWER,
    Moves.EARTH_POWER,
    Moves.ASTRAL_BARRAGE
  ],
  [Species.SLITHER_WING]: [
    Moves.KNOCK_OFF,
    Moves.VICTORY_DANCE,
    Moves.FIRE_LASH,
    Moves.THUNDEROUS_KICK
  ],
  [Species.SANDY_SHOCKS]: [Moves.MORNING_SUN, Moves.ICE_BEAM, Moves.NASTY_PLOT, Moves.THUNDERCLAP],
  [Species.IRON_TREADS]: [
    Moves.SUPERCELL_SLAM,
    Moves.BULK_UP,
    Moves.SHORE_UP,
    Moves.DOUBLE_IRON_BASH
  ],
  [Species.IRON_BUNDLE]: [
    Moves.EARTH_POWER,
    Moves.BOUNCY_BUBBLE,
    Moves.NASTY_PLOT,
    Moves.WATER_SPOUT
  ],
  [Species.IRON_HANDS]: [Moves.DRAIN_PUNCH, Moves.BULK_UP, Moves.PLASMA_FISTS, Moves.ICE_HAMMER],
  [Species.IRON_JUGULIS]: [Moves.FIERY_WRATH, Moves.ROOST, Moves.NASTY_PLOT, Moves.OBLIVION_WING],
  [Species.IRON_MOTH]: [
    Moves.EARTH_POWER,
    Moves.HEAT_WAVE,
    Moves.QUIVER_DANCE,
    Moves.MALIGNANT_CHAIN
  ],
  [Species.IRON_THORNS]: [
    Moves.DIAMOND_STORM,
    Moves.SHORE_UP,
    Moves.SHIFT_GEAR,
    Moves.PLASMA_FISTS
  ],
  [Species.FRIGIBAX]: [
    Moves.DRAGON_DARTS,
    Moves.DRAGON_DANCE,
    Moves.EARTHQUAKE,
    Moves.GLACIAL_LANCE
  ],
  [Species.GIMMIGHOUL]: [
    Moves.ARMOR_CANNON,
    Moves.STORED_POWER,
    Moves.EARTH_POWER,
    Moves.ASTRAL_BARRAGE
  ],
  [Species.WO_CHIEN]: [Moves.SPORE, Moves.FIERY_WRATH, Moves.SAPPY_SEED, Moves.STRENGTH_SAP],
  [Species.CHIEN_PAO]: [
    Moves.KNOCK_OFF,
    Moves.PARTING_SHOT,
    Moves.BITTER_BLADE,
    Moves.GLACIAL_LANCE
  ],
  [Species.TING_LU]: [Moves.SHORE_UP, Moves.WICKED_BLOW, Moves.SAPPY_SEED, Moves.THOUSAND_ARROWS],
  [Species.CHI_YU]: [Moves.FIERY_WRATH, Moves.HYDRO_STEAM, Moves.TORCH_SONG, Moves.ERUPTION],
  [Species.ROARING_MOON]: [
    Moves.FIRE_LASH,
    Moves.DRAGON_HAMMER,
    Moves.SUCKER_PUNCH,
    Moves.WICKED_BLOW
  ],
  [Species.IRON_VALIANT]: [
    Moves.PLASMA_FISTS,
    Moves.NO_RETREAT,
    Moves.SECRET_SWORD,
    Moves.MAGICAL_TORQUE
  ],
  [Species.KORAIDON]: [
    Moves.BITTER_BLADE,
    Moves.MORNING_SUN,
    Moves.GLAIVE_RUSH,
    Moves.CLANGOROUS_SOUL
  ],
  [Species.MIRAIDON]: [
    Moves.ICE_BEAM,
    Moves.CLANGOROUS_SOUL,
    Moves.RISING_VOLTAGE,
    Moves.DRAGON_ENERGY
  ],
  [Species.WALKING_WAKE]: [
    Moves.BOUNCY_BUBBLE,
    Moves.NASTY_PLOT,
    Moves.EARTH_POWER,
    Moves.DRAGON_ENERGY
  ],
  [Species.IRON_LEAVES]: [Moves.SPORE, Moves.U_TURN, Moves.MIGHTY_CLEAVE, Moves.BITTER_BLADE],
  [Species.POLTCHAGEIST]: [
    Moves.SHELL_SMASH,
    Moves.BOUNCY_BUBBLE,
    Moves.LEECH_SEED,
    Moves.SPARKLY_SWIRL
  ],
  [Species.OKIDOGI]: [Moves.DRAIN_PUNCH, Moves.KNOCK_OFF, Moves.DIRE_CLAW, Moves.VICTORY_DANCE],
  [Species.MUNKIDORI]: [Moves.PSYSTRIKE, Moves.HEAT_WAVE, Moves.EARTH_POWER, Moves.MALIGNANT_CHAIN],
  [Species.FEZANDIPITI]: [
    Moves.BARB_BARRAGE,
    Moves.VICTORY_DANCE,
    Moves.TRIPLE_AXEL,
    Moves.MAGICAL_TORQUE
  ],
  [Species.OGERPON]: [
    Moves.FLOWER_TRICK,
    Moves.BONEMERANG,
    Moves.TRIPLE_AXEL,
    Moves.GIGATON_HAMMER
  ],
  [Species.GOUGING_FIRE]: [
    Moves.SUPERCELL_SLAM,
    Moves.BULK_UP,
    Moves.SACRED_FIRE,
    Moves.GLAIVE_RUSH
  ],
  [Species.RAGING_BOLT]: [
    Moves.NASTY_PLOT,
    Moves.FLAMETHROWER,
    Moves.MORNING_SUN,
    Moves.ELECTRO_DRIFT
  ],
  [Species.IRON_BOULDER]: [
    Moves.PSYBLADE,
    Moves.KOWTOW_CLEAVE,
    Moves.STONE_AXE,
    Moves.BITTER_BLADE
  ],
  [Species.IRON_CROWN]: [
    Moves.NASTY_PLOT,
    Moves.SECRET_SWORD,
    Moves.PHOTON_GEYSER,
    Moves.ELECTRO_DRIFT
  ],
  [Species.TERAPAGOS]: [Moves.MOONBLAST, Moves.RECOVER, Moves.ICE_BEAM, Moves.SHELL_SMASH],
  [Species.PECHARUNT]: [Moves.TOXIC_SPIKES, Moves.BODY_PRESS, Moves.HEX, Moves.BANEFUL_BUNKER],
  [Species.ALOLA_RATTATA]: [
    Moves.STORM_THROW,
    Moves.PLAY_ROUGH,
    Moves.TIDY_UP,
    Moves.POPULATION_BOMB
  ],
  [Species.ALOLA_SANDSHREW]: [
    Moves.SPIKY_SHIELD,
    Moves.AQUA_CUTTER,
    Moves.SHIFT_GEAR,
    Moves.GLACIAL_LANCE
  ],
  [Species.ALOLA_VULPIX]: [
    Moves.MOONBLAST,
    Moves.PARTING_SHOT,
    Moves.FLAMETHROWER,
    Moves.FREEZY_FROST
  ],
  [Species.ALOLA_DIGLETT]: [
    Moves.THOUSAND_WAVES,
    Moves.SWORDS_DANCE,
    Moves.TRIPLE_DIVE,
    Moves.MOUNTAIN_GALE
  ],
  [Species.ALOLA_MEOWTH]: [
    Moves.BADDY_BAD,
    Moves.BUZZY_BUZZ,
    Moves.PARTING_SHOT,
    Moves.MAKE_IT_RAIN
  ],
  [Species.ALOLA_GEODUDE]: [
    Moves.HIGH_HORSEPOWER,
    Moves.BULK_UP,
    Moves.STONE_AXE,
    Moves.EXTREME_SPEED
  ],
  [Species.ALOLA_GRIMER]: [
    Moves.SUCKER_PUNCH,
    Moves.DIRE_CLAW,
    Moves.STRENGTH_SAP,
    Moves.SURGING_STRIKES
  ],
  [Species.ETERNAL_FLOETTE]: [
    Moves.FIERY_DANCE,
    Moves.CHLOROBLAST,
    Moves.POLLEN_PUFF,
    Moves.QUIVER_DANCE
  ],
  [Species.GALAR_MEOWTH]: [
    Moves.AQUA_CUTTER,
    Moves.KNOCK_OFF,
    Moves.BULLET_PUNCH,
    Moves.BEHEMOTH_BASH
  ],
  [Species.GALAR_PONYTA]: [
    Moves.SPIRIT_BREAK,
    Moves.EXTREME_SPEED,
    Moves.FLARE_BLITZ,
    Moves.PHOTON_GEYSER
  ],
  [Species.GALAR_SLOWPOKE]: [Moves.TRICK_ROOM, Moves.BADDY_BAD, Moves.MOONBLAST, Moves.TORCH_SONG],
  [Species.GALAR_FARFETCHD]: [
    Moves.ROOST,
    Moves.SACRED_SWORD,
    Moves.KINGS_SHIELD,
    Moves.BEHEMOTH_BLADE
  ],
  [Species.GALAR_ARTICUNO]: [
    Moves.AURA_SPHERE,
    Moves.OBLIVION_WING,
    Moves.ICE_BEAM,
    Moves.PSYSTRIKE
  ],
  [Species.GALAR_ZAPDOS]: [Moves.TIDY_UP, Moves.FLOATY_FALL, Moves.ROOST, Moves.BOLT_BEAK],
  [Species.GALAR_MOLTRES]: [
    Moves.ROOST,
    Moves.SLUDGE_BOMB,
    Moves.FLAMETHROWER,
    Moves.OBLIVION_WING
  ],
  [Species.GALAR_CORSOLA]: [
    Moves.SHELL_SMASH,
    Moves.MOONBLAST,
    Moves.COSMIC_POWER,
    Moves.ASTRAL_BARRAGE
  ],
  [Species.GALAR_ZIGZAGOON]: [
    Moves.CEASELESS_EDGE,
    Moves.FACADE,
    Moves.PARTING_SHOT,
    Moves.EXTREME_SPEED
  ],
  [Species.GALAR_DARUMAKA]: [Moves.ICE_SPINNER, Moves.ENDURE, Moves.DRAIN_PUNCH, Moves.V_CREATE],
  [Species.GALAR_YAMASK]: [
    Moves.STRENGTH_SAP,
    Moves.DIRE_CLAW,
    Moves.THOUSAND_WAVES,
    Moves.SPECTRAL_THIEF
  ],
  [Species.GALAR_STUNFISK]: [
    Moves.SPIKY_SHIELD,
    Moves.EARTHQUAKE,
    Moves.STRENGTH_SAP,
    Moves.THUNDERCLAP
  ],
  [Species.HISUI_GROWLITHE]: [
    Moves.WOOD_HAMMER,
    Moves.HEAD_SMASH,
    Moves.MORNING_SUN,
    Moves.DRAGON_DANCE
  ],
  [Species.HISUI_VOLTORB]: [
    Moves.ICE_BEAM,
    Moves.NASTY_PLOT,
    Moves.RISING_VOLTAGE,
    Moves.SEED_FLARE
  ],
  [Species.HISUI_QWILFISH]: [
    Moves.CEASELESS_EDGE,
    Moves.KNOCK_OFF,
    Moves.STRENGTH_SAP,
    Moves.FISHIOUS_REND
  ],
  [Species.HISUI_SNEASEL]: [
    Moves.THUNDEROUS_KICK,
    Moves.KNOCK_OFF,
    Moves.TRIPLE_AXEL,
    Moves.VICTORY_DANCE
  ],
  [Species.HISUI_ZORUA]: [Moves.MOONBLAST, Moves.AURA_SPHERE, Moves.PARTING_SHOT, Moves.BLOOD_MOON],
  [Species.PALDEA_TAUROS]: [
    Moves.NO_RETREAT,
    Moves.BLAZING_TORQUE,
    Moves.AQUA_STEP,
    Moves.THUNDEROUS_KICK
  ],
  [Species.PALDEA_WOOPER]: [Moves.RECOVER, Moves.STONE_AXE, Moves.BANEFUL_BUNKER, Moves.SAPPY_SEED],
  [Species.BLOODMOON_URSALUNA]: [
    Moves.NASTY_PLOT,
    Moves.TRICK_ROOM,
    Moves.THUNDERBOLT,
    Moves.BOOMBURST
  ]
};

function parseEggMoves(content: string): void {
  let output = "";

  const speciesNames = Object.keys(Species);
  const speciesValues = Object.values(Species);
  const lines = content.split(/\n/g);

  lines.forEach((line, l) => {
    const cols = line.split(",").slice(0, 5);
    const moveNames = allMoves.map((m) => m.name.replace(/ \([A-Z]\)$/, "").toLowerCase());
    const enumSpeciesName = cols[0].toUpperCase().replace(/[ -]/g, "_");
    const species = speciesValues[speciesNames.findIndex((s) => s === enumSpeciesName)];

    const eggMoves: Moves[] = [];

    for (let m = 0; m < 4; m++) {
      const moveName = cols[m + 1].trim();
      const moveIndex =
        moveName !== "N/A" ? moveNames.findIndex((mn) => mn === moveName.toLowerCase()) : -1;
      eggMoves.push(moveIndex > -1 ? (moveIndex as Moves) : Moves.NONE);

      if (moveIndex === -1) {
        console.warn(moveName, "could not be parsed");
      }
    }

    if (eggMoves.find((m) => m !== Moves.NONE)) {
      output += `[Species.${Species[species]}]: [ ${eggMoves.map((m) => `Moves.${Moves[m]}`).join(", ")} ],\n`;
    }
  });

  console.log(output);
}

export function initEggMoves() {
  const eggMovesStr = "";
  if (eggMovesStr) {
    setTimeout(() => {
      parseEggMoves(eggMovesStr);
    }, 1000);
  }
}
