import { CreateTextAreaReflectionsDto } from "./create-text.area.reflections.dto";
import { PartialType } from "@nestjs/mapped-types"

export class UpdateTextAreaReflectionsDto extends PartialType(CreateTextAreaReflectionsDto) {};