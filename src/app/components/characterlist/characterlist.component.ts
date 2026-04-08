import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Character } from '../../models/character';
import { HarrypotterService } from '../../services/harrypotter.service';
import { CharacterFilterComponent } from '../characterfilter/characterfilter.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CharacterFilterComponent,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './characterlist.component.html',
  styleUrl: './characterlist.component.css'
})
export class CharacterListComponent implements OnInit {
  private hpService = inject(HarrypotterService);
  private router = inject(Router);

  characters = signal<Character[]>([]);
  loading = signal(true);
  errorMessage = signal('');

  ngOnInit(): void {
    this.loadAllCharacters();
  }

  loadAllCharacters(): void {
    this.loading.set(true);
    this.errorMessage.set('');

    this.hpService.getAllCharacters().subscribe({
      next: (data) => {
        const filtered = data.filter((c) => c.image && c.id);
        this.characters.set(filtered);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Failed to load characters:', err);
        this.errorMessage.set('Failed to load characters.');
        this.loading.set(false);
      }
    });
  }

  onHouseSelected(house: string): void {
    if (!house) {
      this.loadAllCharacters();
      return;
    }

    this.loading.set(true);
    this.errorMessage.set('');

    this.hpService.getCharactersByHouse(house).subscribe({
      next: (data) => {
        const filtered = data.filter((c) => c.image && c.id);
        this.characters.set(filtered);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Failed to load filtered characters:', err);
        this.errorMessage.set('Failed to load filtered characters.');
        this.loading.set(false);
      }
    });
  }

  goToDetails(id: string): void {
    if (!id) return;
    this.router.navigate(['/character', id]);
  }
}