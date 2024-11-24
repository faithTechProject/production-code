import { co_creation_forms_dto } from "./co_creation_forms-dto";
import { PartialType } from "@nestjs/mapped-types";

export class update_co_creation_dto extends PartialType(co_creation_forms_dto) {};
