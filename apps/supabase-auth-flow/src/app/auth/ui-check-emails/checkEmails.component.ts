import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'sfa-check-emails',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './checkEmails.component.html',
    styleUrl: './checkEmails.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckEmailsComponent {}
