import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
    repository: string;
}

const Reposiroty: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return <h1>Reposiroty:{params.repository}</h1>;
};

export default Reposiroty;
