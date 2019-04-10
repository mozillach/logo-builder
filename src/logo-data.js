export const serialize = (logoData) => {
    return `${logoData.inverted ? 1 : 0}:${logoData.color.substr(1)}:${logoData.community}`;
};

export const deserialize = (serializedData) => {
    const [ inverted, color, ...communityParts ] = serializedData.split(':');
    return {
        inverted: inverted === '1',
        color: color && `#${color}`,
        community: communityParts.join(':')
    };
};