import {Component, inject, OnInit} from '@angular/core';
import {MembersService} from '../../_services/members.service';
import {member} from '../../_models/member';
import {MemberCardComponent} from '../member-card/member-card.component';

@Component({
  selector: 'app-member-list',
  standalone: true,
    imports: [
        MemberCardComponent
    ],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements OnInit {
    private readonly membersService = inject(MembersService);
    members: member[] = [];
    ngOnInit() {
        this.loadMembers();
    }

    loadMembers() {
        this.membersService.getMembers().subscribe({
            next: (members) => {
                this.members = members;
            }
        });
    }

}
