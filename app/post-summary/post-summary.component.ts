import {Component, Input} from '@angular/core';
import {Post} from "../models/post";
import {MarkDownRenderer} from "../services/markdown-renderer.service";

@Component({
  selector: 'msb-post-summary',
  templateUrl: 'app/post-summary/post-summary.component.html',
  styleUrls: ['app/post-summary/post-summary.component.css']
})

export class PostSummaryComponent {
  constructor(private _markDownRenderer: MarkDownRenderer) {}

  @Input() post: Post;
  public summaryHtml: string;

  ngOnInit() {
    this.summaryHtml = this._markDownRenderer.renderToHtml(this.post.summary);
    console.log("summary html: "+this.summaryHtml);
  }
}
