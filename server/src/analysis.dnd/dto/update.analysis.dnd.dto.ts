import { AnalysisDndDto } from "./create.analysis.dnd.dto";
import { PartialType } from "@nestjs/mapped-types";

export class PartialAnalysisDndDto extends PartialType(AnalysisDndDto) {};