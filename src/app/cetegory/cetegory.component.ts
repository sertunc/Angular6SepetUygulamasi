import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from './category';


@Component({
  selector: 'app-cetegory',
  templateUrl: './cetegory.component.html',
  styleUrls: ['./cetegory.component.css'],
  providers: [CategoryService]
})

export class CetegoryComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category;

  constructor(private categoryService: CategoryService) { }

  getCategories() {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
    });
  }

  ngOnInit() {
    this.getCategories();
  }

  onSelect(item?: Category) {
    if (item) {
      this.selectedCategory = item;
    } else {
      this.selectedCategory = null;
    }
  }

}
