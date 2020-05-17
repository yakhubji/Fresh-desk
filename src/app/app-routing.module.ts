import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./Contacts/contact/contact.component";
import { TicketComponent } from "./Ticket/ticket/ticket.component";
const routes: Routes = [
  {
    path: "contacts",
    component: ContactComponent,
  },
  {
    path: "tickets",
    component: TicketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
