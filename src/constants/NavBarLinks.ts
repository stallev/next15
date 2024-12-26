import { RoutePath } from "./RoutePath";

export const NavBarLinksNames = {
  HomeLinkName: "home_nav_link_text",
  MinistersLinkName: "ministers_nav_link_text",
  BroadcastsLinkName: "Broadcasts",
  SermonsLinkName: "sermons_nav_link_text",
  ContactsLinkName: "contacts_nav_link_text",
  GetInTouchLinkName: "contact_us_nav_link_text",
  GivingLinkName: "giving_nav_link_text",
  PrayerRequestLinkName: "prayer_request_nav_link_text",
  AboutChurchLinkName: "about_church_nav_link_text",
  LiveStreamsLinkName: "live_streams_nav_link_text",
  PrivacyPolicy: "privacy_policy_nav_link_text",
  Terms: "terms_nav_link_text",
  GospelPageLinkName: "gospel_nav_link",
  ResourcesLinkName: "resources_nav_link",
  OurBeliefs: "beliefs_nav_link",
  Staff: "staff_nav_link",
  Ministries: "ministries_page_nav_link",
  KidsMinistry: "kids_ministry_nav_link",
  YouthMinistry: "youth_ministry_nav_link",
  WorshipMinistry: "worship_ministry_nav_link",
  FamilyMinistry: "family_ministry_nav_link",
  MissionaryMinistry: "missionary_ministry_nav_link",
  SmallGroupsMinistry: "small_groups_ministry_nav_link",
  WomenMinistry: "women_ministry_nav_link",
  Participation: "participation_nav_link",
  Timeline: "timeline_nav_link",
  Media: "media_nav_link",
  UpcomingEvents: "upcoming_events_nav_link",
  OurPlans: "our_plans_nav_link",
  Phones: "phones_nav_link",
  SpititualLife: "spiritual_life_nav_link",
  Blog: "pastors_blog_nav_link",
  Baptism: "baptism_blog_nav_link",
  Marriage: "marriage_blog_nav_link",
};

export const NavBarMinistryLinks = [
  {
    link: RoutePath.KidsMinistry,
    label: NavBarLinksNames.KidsMinistry,
  },
  {
    link: RoutePath.YouthMinistry,
    label: NavBarLinksNames.YouthMinistry,
  },
  {
    link: RoutePath.SmallGroupsMinistry,
    label: NavBarLinksNames.SmallGroupsMinistry,
  },
  {
    link: RoutePath.MissionaryMinistry,
    label: NavBarLinksNames.MissionaryMinistry,
  },
  {
    link: RoutePath.FamilyMinistry,
    label: NavBarLinksNames.FamilyMinistry,
  },
  {
    link: RoutePath.WorshipMinistry,
    label: NavBarLinksNames.WorshipMinistry,
  },
  {
    link: RoutePath.WomenMinistry,
    label: NavBarLinksNames.WomenMinistry,
  },
];

export const MainNavBarLinks = [
  {
    link: "",
    label: NavBarLinksNames.Ministries,
    children: NavBarMinistryLinks,
  },

  {
    link: "",
    label: NavBarLinksNames.AboutChurchLinkName,
    children: [
      {
        link: RoutePath.Staff,
        label: NavBarLinksNames.Staff,
      },
      {
        link: RoutePath.OurBeliefs,
        label: NavBarLinksNames.OurBeliefs,
      },
      {
        link: RoutePath.Timeline,
        label: NavBarLinksNames.Timeline,
      },
      {
        link: RoutePath.GospelPage,
        label: NavBarLinksNames.GospelPageLinkName,
      },
    ],
  },

  {
    link: "",
    label: NavBarLinksNames.Media,
    children: [
      {
        link: RoutePath.LiveStreams,
        label: NavBarLinksNames.LiveStreamsLinkName,
      },
      {
        link: RoutePath.Sermons,
        label: NavBarLinksNames.SermonsLinkName,
      },
    ],
  },

  {
    link: RoutePath.UpcomingEvents,
    label: NavBarLinksNames.UpcomingEvents,
    children: [],
  },

  {
    link: RoutePath.Giving,
    label: NavBarLinksNames.GivingLinkName,
    children: [],
  },  

  {
    link: RoutePath.Contacts,
    label: NavBarLinksNames.ContactsLinkName,
    children: [],
  },

  {
    link: RoutePath.Blog,
    label: NavBarLinksNames.Blog,
    children: [],
  },
];
