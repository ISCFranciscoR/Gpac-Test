'use strict'

const Talent = use('App/Models/Talent');
const Database = use('Database')


class TalentController {

    async index({ request }) {
        const { gender, industry, location } = request.all();
        const result = await Database
            .raw('SELECT * FROM sp_list_talents(?, ?, ?)', [gender, industry, location]);
        return result.rows;
    }

    async store({ request }) {
        const {
            first_name,
            first_lastname,
            second_lastname,
            actual_job,
            industry_id,
            phone,
            salary,
            location_id,
            birthday,
            gender_id,
            experience,
            comments,
            profile_img,
            job_position_id
        } = request.all();

        const talent = await Talent.create({
            first_name,
            first_lastname,
            second_lastname,
            actual_job,
            industry_id,
            phone,
            salary,
            location_id,
            birthday,
            gender_id,
            experience,
            comments,
            profile_img,
            job_position_id
        });
        await talent.save();
        return talent;
    }

    async destroy({ request, params }) {
        const id = params.id;
        const talent = await Talent.find(id);
        await talent.delete();
        return talent;
    }

    async update({ request, params }) {
        const id = params.id;
        const {
            first_name,
            first_lastname,
            second_lastname,
            actual_job,
            industry_id,
            phone,
            salary,
            location_id,
            birthday,
            gender_id,
            experience,
            comments,
            profile_img,
            job_position_id
        } = request.all();

        const talent = await Talent.find(id);

        talent.merge({
            first_name: first_name,
            first_lastname: first_lastname,
            second_lastname: second_lastname,
            actual_job: actual_job,
            industry_id: industry_id,
            phone: phone,
            salary: salary,
            location_id: location_id,
            birthday: birthday,
            gender_id: gender_id,
            experience: experience,
            comments: comments,
            profile_img: profile_img,
            job_position_id: job_position_id
        });

        await talent.save();

        return talent;
    }

    async findById({ params }) {
        const id = params.id;
        const talent = await Talent.find(id);
        return talent;
    }
}

module.exports = TalentController