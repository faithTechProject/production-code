import { CreateMatrixDto } from "./create-matrix-dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateMatrixDto extends PartialType(CreateMatrixDto) {};