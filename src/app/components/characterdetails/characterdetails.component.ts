import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HarrypotterService } from '../../services/harrypotter.service';
import { Character } from '../../models/character';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './characterdetails.component.html',
  styleUrl: './characterdetails.component.css'
})
export class CharacterDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private hpService = inject(HarrypotterService);

  character = signal<Character | null>(null);
  loading = signal(true);
  errorMessage = signal('');

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.errorMessage.set('Character ID not found.');
      this.loading.set(false);
      return;
    }

    this.hpService.getCharacterById(id).subscribe({
      next: (data) => {
        this.character.set(data[0] || null);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set('Failed to load character details.');
        this.loading.set(false);
      }
    });
  }
}