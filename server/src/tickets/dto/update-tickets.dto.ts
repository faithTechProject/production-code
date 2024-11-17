import { CreateTicketsDto } from "./create-tickets-dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateTicketsDto extends PartialType(CreateTicketsDto) {};