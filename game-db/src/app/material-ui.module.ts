import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [CommonModule],
  exports: [MatTabsModule, MatIconModule, MatFormFieldModule, MatSelectModule],
})
export class MaterialUIModule {}
