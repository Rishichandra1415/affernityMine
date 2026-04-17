import { badmintonCourt } from "./data/badminton-court";
import { lawnTennisCourt } from "./data/lawn-tennis-court";
import { basketballCourt } from "./data/basketball-court";
import { hockeyCourt } from "./data/hockey-court";
import { gymFlooring } from "./data/gym-flooring";
import { runningTrack } from "./data/running-track";
import { asphaltBase } from "./data/asphalt-base";
import { chainLinkFencing } from "./data/chain-link-fencing";
import { swimmingPool } from "./data/swimming-pool";
import { childrenPark } from "./data/children-park";
import { outdoorGym } from "./data/outdoor-gym";
import { cricketPitch } from "./data/cricket-pitch";
import { squashPadel } from "./data/squash-padel";
import { turnkeyDevelopment } from "./data/turnkey-development";
import { maintenanceServices } from "./data/maintenance-amc";


import { InfrastructureData } from "./types";

export const infrastructureData: Record<string, InfrastructureData> = {
  "badminton-court": badmintonCourt,
  "lawn-tennis-court": lawnTennisCourt,
  "basketball-court": basketballCourt,
  "hockey-court": hockeyCourt,
  "gym-flooring": gymFlooring,
  "running-track": runningTrack,
  "asphalt-base": asphaltBase,
  "chain-link-fencing": chainLinkFencing,
  "swimming-pool": swimmingPool,
  "children-park": childrenPark,
  "outdoor-gym": outdoorGym,
  "cricket-pitch": cricketPitch,
  "squash-padel-courts": squashPadel,
  "turnkey-sports-projects": turnkeyDevelopment,
  "maintenance-and-amc": maintenanceServices,
};


export * from "./types";
export * from "./components/infra-hero";
export * from "./components/construction-process";
export * from "./components/infra-gallery";
export * from "./components/infra-features";
export * from "./components/infra-spec-table";
export * from "./components/infra-cta";
