import { Component, inject } from '@angular/core';
import { AuthService } from '../domain/data-access/auth.service';
import { from } from 'rxjs';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'sfa-feature-user',
    standalone: true,
    imports: [AsyncPipe, JsonPipe, NgIf, RouterLink],
    templateUrl: './feature-user.component.html',
    styleUrl: './feature-user.component.scss',
})
export class FeatureUserComponent {
    user$ = from(inject(AuthService).getUserSession());
}
