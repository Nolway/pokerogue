import BattleScene from "../battle-scene";
import Trainer, { TrainerVariant } from "../field/trainer";
import { TrainerType } from "#enums/trainer-type";

export default class TrainerData {
  public trainerType: TrainerType;
  public variant: TrainerVariant;
  public partyTemplateIndex: integer;
  public name: string;
  public partnerName: string;

  constructor(source: Trainer | any) {
    const sourceTrainer = source instanceof Trainer ? source : null;
    this.trainerType = sourceTrainer ? sourceTrainer.config.trainerType : source.trainerType;
    this.variant = source.hasOwnProperty("variant")
      ? source.variant
      : source.female
        ? TrainerVariant.FEMALE
        : TrainerVariant.DEFAULT;
    this.partyTemplateIndex = source.partyMemberTemplateIndex;
    this.name = source.name;
    this.partnerName = source.partnerName;
  }

  toTrainer(scene: BattleScene): Trainer {
    return new Trainer(
      scene,
      this.trainerType,
      this.variant,
      this.partyTemplateIndex,
      this.name,
      this.partnerName
    );
  }
}
