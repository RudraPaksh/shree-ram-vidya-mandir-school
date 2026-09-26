import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface GalleryItem {
  image: string;
  title: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, 
    FormsModule,RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  /**
   * Keep all gallery images inside:
   *
   * src/assets/gallery/
   *
   * Example:
   * 1.jpeg
   * 2.jpeg
   * 3.jpeg
   * ...
   */

  gallery: GalleryItem[] = [
    {
      image: 'assets/gallery/1.jpeg',
      title: 'Moments of Joy',
      category: 'Campus Life',
      description: 'Beautiful moments captured from everyday school life.'
    },
    {
      image: 'assets/gallery/2.jpeg',
      title: 'Learning Together',
      category: 'Learning',
      description: 'A glimpse into curiosity, learning and discovery.'
    },
    {
      image: 'assets/gallery/3.jpeg',
      title: 'Young Explorers',
      category: 'Activities',
      description: 'Students discovering, creating and experiencing together.'
    },
    {
      image: 'assets/gallery/4.jpeg',
      title: 'Celebrating Together',
      category: 'Celebrations',
      description: 'Special occasions that become cherished memories.'
    },
    {
      image: 'assets/gallery/5.jpeg',
      title: 'School Memories',
      category: 'Campus Life',
      description: 'The little moments that make school life unforgettable.'
    },
    {
      image: 'assets/gallery/6.jpeg',
      title: 'Creative Minds',
      category: 'Activities',
      description: 'Creativity, imagination and expression in action.'
    },
    {
      image: 'assets/gallery/7.jpeg',
      title: 'Growing Together',
      category: 'Students',
      description: 'Friendships and experiences that shape young lives.'
    },
    {
      image: 'assets/gallery/8.jpeg',
      title: 'A Day to Remember',
      category: 'Events',
      description: 'Memorable experiences from our school community.'
    },
    {
      image: 'assets/gallery/9.jpeg',
      title: 'Proud Moments',
      category: 'Achievements',
      description: 'Celebrating effort, participation and achievement.'
    },
    {
      image: 'assets/gallery/10.jpeg',
      title: 'Our School Family',
      category: 'Community',
      description: 'Students, teachers and families coming together.'
    }
  ];

  categories: string[] = [
    'All',
    'Campus Life',
    'Learning',
    'Activities',
    'Events',
    'Celebrations',
    'Achievements',
    'Community'
  ];

  selectedCategory = 'All';
  searchTerm = '';

  active?: GalleryItem;
  activeIndex = 0;

  favorites = new Set<string>();

  get filteredGallery(): GalleryItem[] {
    const search = this.searchTerm.trim().toLowerCase();

    return this.gallery.filter(item => {

      const categoryMatch =
        this.selectedCategory === 'All' ||
        item.category === this.selectedCategory;

      const searchMatch =
        !search ||
        item.title.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search);

      return categoryMatch && searchMatch;
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  clearSearch(): void {
    this.searchTerm = '';
  }

  open(item: GalleryItem): void {
    this.active = item;

    const index = this.gallery.findIndex(
      galleryItem => galleryItem.image === item.image
    );

    this.activeIndex = index >= 0 ? index : 0;

    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.active = undefined;
    document.body.style.overflow = '';
  }

  next(): void {
    if (!this.gallery.length) {
      return;
    }

    this.activeIndex =
      (this.activeIndex + 1) % this.gallery.length;

    this.active = this.gallery[this.activeIndex];
  }

  previous(): void {
    if (!this.gallery.length) {
      return;
    }

    this.activeIndex =
      (this.activeIndex - 1 + this.gallery.length) %
      this.gallery.length;

    this.active = this.gallery[this.activeIndex];
  }

  toggleFavorite(item: GalleryItem, event: MouseEvent): void {
    event.stopPropagation();

    if (this.favorites.has(item.image)) {
      this.favorites.delete(item.image);
    } else {
      this.favorites.add(item.image);
    }
  }

  isFavorite(item: GalleryItem): boolean {
    return this.favorites.has(item.image);
  }

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    if (this.active) {
      this.close();
    }
  }

  @HostListener('document:keydown.arrowright')
  handleArrowRight(): void {
    if (this.active) {
      this.next();
    }
  }

  @HostListener('document:keydown.arrowleft')
  handleArrowLeft(): void {
    if (this.active) {
      this.previous();
    }
  }
}