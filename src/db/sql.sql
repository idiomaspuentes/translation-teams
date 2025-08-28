 CREATE TABLE proyect (
    proyect_id INTEGER NOT NULL,
    proyect_name VARCHAR NOT NULL,
    PRIMARY KEY (proyect_id)
);

INSERT INTO proyect (proyect_id, proyect_name)
VALUES
    (1, 'Project Alpha'),
    (2, 'Project Beta'),
    (3, 'Project Gamma');


CREATE TABLE user_translation_team (
    user_id INTEGER NOT NULL,
    translation_team_id INTEGER NOT NULL,
    PRIMARY KEY (user_id, translation_team_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (translation_team_id) REFERENCES translation_teams(id) ON DELETE CASCADE
);

INSERT INTO user_translation_team (user_id, translation_team_id)
VALUES
    (1, 1), -- User 1 is part of Translation Team 1
    (2, 1), -- User 2 is part of Translation Team 1
    (3, 2), -- User 3 is part of Translation Team 2
    (4, 2), -- User 4 is part of Translation Team 2
    (5, 3); -- User 5 is part of Translation Team 3

    CREATE TABLE repository (
    repository_id INTEGER NOT NULL,
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    owner_id INTEGER NOT NULL,
    PRIMARY KEY (repository_id)
);

INSERT INTO repository (repository_id, name, description, owner_id)
VALUES
    (1, 'Repo Alpha', 'Description of Repo Alpha', 1),
    (2, 'Repo Beta', 'Description of Repo Beta', 2),
    (3, 'Repo Gamma', 'Description of Repo Gamma', 3);


CREATE TABLE owner (
    owner_id INTEGER NOT NULL,
    owner_name VARCHAR NOT NULL,
    PRIMARY KEY (owner_id)
);

INSERT  INTO owner (owner_id, owner_name)
VALUES  
    (1, 'Owner One'),
    (2, 'Owner Two'),
    (3, 'Owner Three');

CREATE TABLE  issue (
    issue_id INTEGER NOT NULL,
    title VARCHAR NOT NULL,
    description TEXT NOT NULL,
    status VARCHAR NOT NULL,
    repository_id INTEGER NOT NULL,
    label VARCHAR NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (issue_id),
    FOREIGN KEY (repository_id) REFERENCES repository(repository_id) ON DELETE CASCADE
);

INSERT INTO issue (issue_id, title, description, status, repository_id, label)
VALUES  
    (1, 'Issue One', 'Description of Issue One', 'open', 1, 'bug'),
    (2, 'Issue Two', 'Description of Issue Two', 'closed', 2, 'feature'),
    (3, 'Issue Three', 'Description of Issue Three', 'open', 3, 'enhancement');


    SELECT p.proyect_name ,
        i.issue_id,
        i.title,
        i.description,
        i.status,
        r.name AS repository_name,
        o.owner_name AS repository_owner,
        i.label,
        i.created_at 
    from proyect p
    JOIN repository r ON i.repository_id = p.proyect_id
    JOIN issue i ON r.repository_id = i.repository_id
    JOIN owner o ON r.owner_id = o.owner_id
    WHERE i.status = 'open'