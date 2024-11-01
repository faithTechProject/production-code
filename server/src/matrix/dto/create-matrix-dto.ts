export class CreateMatrixDto {
    id: number;
    category: string;
    page: string;
    entry_pos: number;
    input: string[];
    tasks_rows: string[];
    roles_columns: string[];
    rci_input: string[];
}