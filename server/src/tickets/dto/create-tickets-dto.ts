export class CreateTicketsDto {
    id: number;
    status: string;
    row_index: number;
    title: string;
    description: string;
    assigned_to: string;
    date_created: string;
    date_due: string;
    sprint: string;
    percent_complete: string;
    is_open: boolean;
}