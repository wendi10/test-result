import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPagination } from '../../models/pagination.model';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
	public paginationDisplay: any;
	public value: any;
	public text: any;

	@Input()
	public pagination: IPagination | null;

	@Output()
	public selectedPage: EventEmitter<any> = new EventEmitter();

	constructor() {
		this.pagination = null
	}

	ngOnInit(): void {
		this.paginationDisplay = [];
	}

	public emitDataPage(page: any): void {
		this.selectedPage.emit(page);
	}

	public pageCounter(value: number): number[] {
		return new Array(value);
	}

	public updatePagination(total_page: number, current_page: number): any {
		this.paginationDisplay = [];
		const totalPage = Number(total_page);
		const currentPage = Number(current_page);
		if (totalPage <= 5) {
			for (let i = 0; i < totalPage; i++) {
				this.paginationDisplay.push({
					value: i + 1,
					text: i + 1,
				});
			}
		} else if (currentPage - 2 <= 1) {
			let x = 0;
			const index = totalPage > 5 ? 5 : totalPage;
			for (let i = 0; i < index; i++) {
				this.paginationDisplay.push({
					value: i + 1,
					text: i + 1,
				});
				x = i;
			}
			this.paginationDisplay.push({
				value: x + 1 - 1,
				text: '...',
			});
			this.paginationDisplay.push({
				value: totalPage,
				text: totalPage,
			});
		} else if (currentPage + 2 >= totalPage) {
			this.paginationDisplay.push({
				value: 1,
				text: 1,
			});
			this.paginationDisplay.push({
				value: totalPage - 5,
				text: '...',
			});

			let x = 0;
			for (let i = totalPage - 4; i <= totalPage; i++) {
				this.paginationDisplay.push({
					value: totalPage - (totalPage - i),
					text: totalPage - (totalPage - i),
				});
				x = i;
			}
		} else {
			this.paginationDisplay.push({
				value: 1,
				text: 1,
			});
			this.paginationDisplay.push({
				value: currentPage - 3,
				text: '...',
			});
			for (
				let i = Number(currentPage) - 2;
				i <= Number(currentPage) + 2;
				i++
			) {
				this.paginationDisplay.push({
					value: i,
					text: i,
				});
			}
			this.paginationDisplay.push({
				value: currentPage + 3,
				text: '...',
			});
			this.paginationDisplay.push({
				value: totalPage,
				text: totalPage,
			});
		}
		return this.paginationDisplay;
	}
}
