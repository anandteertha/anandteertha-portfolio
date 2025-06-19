import { WorkType } from '@modules/enums/work-type';
import { Icomments } from '@modules/interfaces/icomments';
import { IContainerTemplate } from '@modules/interfaces/icontainer-template';

export interface IentityType {
    name: string;
    type: WorkType;
    carousel: string[];
    desccription: string[];
    comments: Icomments[];
    container: IContainerTemplate
}
