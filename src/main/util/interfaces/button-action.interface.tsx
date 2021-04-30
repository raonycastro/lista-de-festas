export interface ButtonAction {
    type: 'mini' | 'normal' | 'wide';
    color: 'primary' | 'secundary' | 'warning' | 'danger' | 'success';
    icon: string;
    action?: Function;
    link?: string;
}