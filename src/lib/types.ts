export type HackathonCard = {
    number: number;
    name: string;
    year: number;
    description?: string;
    imgFormat: string;
    photosLink: string;
    sponsors?: string[];
};

export type SponsorsScrollerProps = {
    reverse?: boolean;
    sponsors: string[];
    iteration: string;
};

export type SponsorsProps = {
    sponsors?: string[];
    iteration: string;
    year: number;
};

export interface HackathonCardProps {
    isCentered: boolean;
    position: number;
    hackathon: HackathonCard;
    onSelect: () => void;
    cardSize: number;
}

export type SocialLink = {
    name: string;
    link: string;
};