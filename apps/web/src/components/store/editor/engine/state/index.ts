import { EditorMode, EditorTabValue, SettingsTabValue } from "@onlook/models";
import { makeAutoObservable } from "mobx";
import type { EditorEngine } from "..";

export class StateManager {
    private _plansOpen: boolean = false;
    settingsOpen: boolean = false;
    hotkeysOpen: boolean = false;
    publishOpen: boolean = false;
    editorMode: EditorMode = EditorMode.DESIGN;
    editorPanelTab: EditorTabValue = EditorTabValue.CHAT;
    settingsTab: SettingsTabValue = SettingsTabValue.PREFERENCES;

    constructor(private editorEngine: EditorEngine) {
        makeAutoObservable(this);
    }

    get plansOpen() {
        return this._plansOpen;
    }
    set plansOpen(open: boolean) {
        this._plansOpen = open;
        if (open) {
            // sendAnalytics('open pro checkout');
        }
    }

    dispose() {
        this.plansOpen = false;
        this.settingsOpen = false;
        this.hotkeysOpen = false;
        this.publishOpen = false;
    }
}
