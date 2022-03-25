export interface RawPhase {
  title: string;
  tasks: string[];
}

const foundation: RawPhase = {
  title: "Foundation",
  tasks: ["Setup virtual office", "Set mission & vision", "Select business name", "Buy domains"]
};

const discovery: RawPhase = {
  title: "Discovery",
  tasks: ["Create roadmap", "Competitor analysis"]
};

const delivery: RawPhase = {
  title: "Delivery",
  tasks: ["Release marketing website", "Release MVP"]
};

export const roadmap = [foundation, discovery, delivery];
