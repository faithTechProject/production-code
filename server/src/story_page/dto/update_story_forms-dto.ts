import { story_forms_dto } from "./story_forms-dto";
import { PartialType } from "@nestjs/mapped-types";

export class update_story_forms_dto extends PartialType(story_forms_dto) {};
