import { action, makeAutoObservable, makeObservable, observable } from "mobx";
import agent from "../api/agent";
import { Activity } from "../models/activity";

export default class ActivityStore{
    activities: Activity[] = [];
    selectedActivity: Activity | null = null;
    editMode = false;
    loading = false;
    loadingInitial = false;
    constructor(){
        makeAutoObservable(this)
    }
    loadActivities = async () => {
        this.setLoadingInitial(true);
        try {
            const activities = await agent.Activities.list();
           
                this.activities.forEach( activity =>{
                    activity.date = activity.date.split('T')[0];
                    activities.push(activity);      
                })        
                this.setLoadingInitial(false);
            } 
                catch (error) {
            console.log(error)
            this.setLoadingInitial(false);
        }
    }
    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }
}