import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Profile } from "../models/profile";

export default class PRofileStore {
    profile: Profile | null = null;
    loadingProfile = false;
    constructor() {
        makeAutoObservable(this);
    }
    loadProfile = async (username: string) => {
        try {
            this.loadingProfile = true;
            const profile = await agent.Profiles.get(username);
            runInAction(() => {
                this.profile = profile;
                this.loadingProfile = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => this.loadingProfile = false);
        }
    }
}