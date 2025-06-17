import { WorkType } from '@modules/enums/work-type';
import { Icomments } from '@modules/interfaces/icomments';

export interface IentityType {
    name: string;
    type: WorkType;
    carousel: string[];
    desccription: string[];
    comments: Icomments[];
}
