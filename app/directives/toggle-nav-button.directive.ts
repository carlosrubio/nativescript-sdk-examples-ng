import { ActivatedRoute } from "@angular/router";
import { Directive } from "@angular/core";
import { EventData } from "data/observable";
import { NavigationButton } from "ui/action-bar";
import { Page } from "ui/page";
import { RouterExtensions } from 'nativescript-angular/router';
import app = require("application");

@Directive({
    selector: "[toggleNavButton]"
})

export class ToggleNavButtonDirective {
    constructor(route: ActivatedRoute, page: Page, private routerExtensions: RouterExtensions) {
        let navigationButton = this.createNavigationButton();
        page.actionBar.navigationButton = navigationButton;
        this.toggleNavigationButtonVisibility(page.actionBar.navigationButton);
    }

    createNavigationButton(): NavigationButton {
        let navigationButton = new NavigationButton();
        navigationButton.visibility = "visible";

        if (app.android) {
            navigationButton.android.systemIcon = "ic_menu_back";

            navigationButton.on("tap", (args: EventData) => {
                this.routerExtensions.backToPreviousPage();
            });
        }
        else if (app.ios) {
            navigationButton.text = "";
        }

        return navigationButton;
    }

    toggleNavigationButtonVisibility(button: NavigationButton) {
        if (button.actionBar.title === "Examples") {
            button.visibility = "collapsed";
        }
    }
}